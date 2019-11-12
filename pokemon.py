#movies.py
import cherrypy
import json
from _pokemon_database import _pokemon_database

class PokemonController(object):

    def __init__(self, pdb=None):
        if pdb is None:
            self.pdb = _pokemon_database()
        else:
            self.pdb = pdb

        self.pdb.load_pokemon('pokemon.json')
        self.pdb.load_pokemon_info('pokemon_info.json') #create this method
        #TODO load other resource files

    def GET_TYPE(self, name): #given 
        output = {'result' : 'success'}
        try:
            poke_type = self.pdb.get_type(name)
            if poke_type is not None:
                output['pokemon'] = name
                output['type'] = poke_type
            else:
                output['result'] = 'error'
                output['message'] = 'pokemon not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)


    # def get_poster_by_mid(self, mid):
    #     if mid in self.mdb.posters.keys():
    #         return self.mdb.posters[mid]
    #     return '/default.jpg'


    # def PUT_MID(self, movie_id): #tried?
    #     output = {'result' : 'success'}
    #     movie_id = int(movie_id)

    #     #extract msg from body
    #     try:
    #        data = cherrypy.request.body.read()
    #        data = json.loads(data)
    #        title = data['title']
    #        genres = data['genres']
    #        self.mdb.set_movie(movie_id, [title,genres])
    #     except Exception as ex:
    #         output['result'] = 'error'
    #         output['message'] = str(ex)

    #     return json.dumps(output)

    # def GET(self): #tried?
    #     output = {'result': 'success'}
    #     entries = []
    #     try:
    #         for item in self.mdb.movies.keys():
    #             get_all = {}
    #             MID = item
    #             get_all['id'] = MID       
    #             get_all['title'] = self.mdb.movies[item][0]                
    #             get_all['genres'] = self.mdb.movies[item][1]              
    #             get_all['result'] = 'success'              
    #             get_all['img'] = self.get_poster_by_mid(int(MID))              
    #             entries.append(get_all)

    #         output = {'movies':entries, 'result':'success'}
    #     except Exception as ex:
    #         output['result'] = 'error'
    #         output['message'] = str(ex)
            
    #     return json.dumps(output)

    # def POST(self): #tried? definitely come back
    #     data = cherrypy.request.body.read()
    #     data = json.loads(data)
    #     allKeys = self.mdb.movies.keys()
        
    #     output = {'result': 'success'}
    #     output['id'] = max(allKeys) + 1
    #     d = {}
    #     try:
    #         movie_id = max(allKeys) + 1
    #         title = data['title']
    #         genres = data['genres']
    #         self.mdb.set_movie(movie_id, [title,genres])
    #     except Exception as ex:
    #         output['result'] = 'error'
    #         output['message'] = str(ex)
    #     return json.dumps(output)
        
    # def DELETE(self, movie_id): #tried?
    #     output = {'result':'success'}
    #     try:
    #         del self.mdb.movies[int(movie_id)]
    #     except Exception as ex:
    #         output['result'] = 'error'
    #         output['message'] = str(ex)
        
    #     return json.dumps(output)

    # def DELETE_ALL(self): #tried
    #     self.mdb.movies.clear()
    #     output = {'result':'success'}
    #     return json.dumps(output)
