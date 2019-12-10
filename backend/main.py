'''
we chose to scrape all of the data needed from the Pokemon Go API using scrape.py
all of the scraped data is placed into local files that _pokemon_database loads
this loaded data is used to fill any query to our server

this design choice was made because many of the actions our group is trying to perform 
are complicated and would require many requests to the Pokemon Go API calls
for instance: finding the types a pokemon is weak to requires a pokemon response and a bunch of type responses

where we found examples: 
    - https://pokeapi.co/
    - https://pokeapi.co/api/v2/pokemon/ditto/
    - https://pokeapi.co/api/v2/type/3/
'''

import cherrypy

# create pokemon.py
from pokemon import PokemonController

# copy your fully working python primer
from _pokemon_database import _pokemon_database


# Class for CORS correction of server 
class OptionsController: 
    def OPTIONS(self, *args, **kwargs):
        return ""

def CORS():
    cherrypy.response.headers["Access-Control-Allow-Origin"] = "*"
    cherrypy.response.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE, OPTIONS"
    cherrypy.response.headers["Access-Control-Allow-Credentials"] = "true"

def start_service():
    dispatcher = cherrypy.dispatch.RoutesDispatcher()

    # instantiate mdb so that it is shared with all controllers
    pdb_o = _pokemon_database()

    # instantiate controllers
    pokemonController = PokemonController(pdb=pdb_o)
    optionsController = OptionsController() 

    #connecting endpoints

    #connect /movies/:movie_id resource
    dispatcher.connect('pokemon_get_type', '/pokemon/:name', controller=pokemonController, action='GET_TYPE', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_all', '/pokemon', controller=pokemonController, action='GET', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_weakness', '/weakness/:types', controller=pokemonController, action='GET_WEAKNESS', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_strength', '/strength/:types', controller=pokemonController, action='GET_STRENGTH', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_strength', '/strength/:types', controller=pokemonController, action='GET_STRENGTH', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_type', '/type/:ptype', controller=pokemonController, action='GET_TYPES_POKEMON', conditions=dict(method=['GET']))

    # CORS server 
    dispatcher.connect('pokemon_get_type_options', '/pokemon/:name', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))
    dispatcher.connect('pokemon_get_all_options', '/pokemon', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))
    dispatcher.connect('pokemon_get_weakness_options', '/weakness/:types', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))
    dispatcher.connect('pokemon_get_strength_options', '/strength/:types', controller=optionsController, action='OPTIONS', conditions=dict(method=['OPTIONS']))
    dispatcher.connect('pokemon_get_type', '/type/:ptype', controller=pokemonController, action='GET_TYPES_POKEMON', conditions=dict(method=['GET']))

    conf = {
        'global' : {
            'server.socket_host' : 'student04.cse.nd.edu',
            'server.socket_port' : 51053,
        },
        '/' : {
            'request.dispatch' : dispatcher,
            'tools.CORS.on': True,
        }
    }

    cherrypy.config.update(conf)
    app = cherrypy.tree.mount(None, config=conf)
    cherrypy.quickstart(app)

if __name__ == '__main__':
    cherrypy.tools.CORS = cherrypy.Tool('before_finalize', CORS)
    start_service()
