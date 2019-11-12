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
    # dispatcher.connect('movie_put', '/movies/:movie_id', controller=movieController, action='PUT_MID', conditions=dict(method=['PUT']))
    # dispatcher.connect('movie_get', '/movies/', controller=movieController, action='GET', conditions=dict(method=['GET']))
    # dispatcher.connect('movie_post', '/movies/', controller=movieController, action='POST', conditions=dict(method=['POST']))
    # dispatcher.connect('movie_delete_mid', '/movies/:movie_id', controller=movieController, action='DELETE', conditions=dict(method=['DELETE']))
    # dispatcher.connect('movie_delete_all', '/movies/', controller=movieController, action='DELETE_ALL', conditions=dict(method=['DELETE']))


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
