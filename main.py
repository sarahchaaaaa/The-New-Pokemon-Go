import cherrypy

# create pokemon.py
from pokemon import PokemonController

# copy your fully working python primer
from _pokemon_database import _pokemon_database

def start_service():
    dispatcher = cherrypy.dispatch.RoutesDispatcher()

    # instantiate mdb so that it is shared with all controllers

    pdb_o = _pokemon_database()

    # instantiate controllers
    pokemonController = PokemonController(pdb=pdb_o)

    #connecting endpoints

    #connect /movies/:movie_id resource
    dispatcher.connect('pokemon_get_type', '/pokemon/:name', controller=pokemonController, action='GET_TYPE', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_all', '/pokemon', controller=pokemonController, action='GET', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_weakness', '/weakness/:types', controller=pokemonController, action='GET_WEAKNESS', conditions=dict(method=['GET']))
    dispatcher.connect('pokemon_get_strength', '/strength/:types', controller=pokemonController, action='GET_STRENGTH', conditions=dict(method=['GET']))


    conf = {
        'global' : {
            'server.socket_host' : 'student04.cse.nd.edu',
            'server.socket_port' : 51053,
        },
        '/' : {
            'request.dispatch' : dispatcher,
        }
    }

    cherrypy.config.update(conf)
    app = cherrypy.tree.mount(None, config=conf)
    cherrypy.quickstart(app)


if __name__ == '__main__':
    start_service()
