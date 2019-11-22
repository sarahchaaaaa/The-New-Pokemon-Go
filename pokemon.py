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
        self.pdb.load_weakness_info('type_weakness.json')
        self.pdb.load_strength_info('type_strength.json')
        #TODO load other resource files

    def GET(self): #given 
        output = {'result': 'success'}
        entries = []
        try:
            for item in self.pdb.pokemon.keys():
                get_all = {}
                PID = item
                get_all['id'] = PID     
                print(item)
                get_all['name'] = (self.pdb.pokemon[item]).capitalize()                   
                entries.append(get_all)

            output = {'pokemon':entries, 'result':'success'}
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)
            
        return json.dumps(output)

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

    def GET_WEAKNESS(self, types): #given 
        output = {'result' : 'success'}
        try:
            poke_weakness = self.pdb.get_weakness(types)
            if poke_weakness is not None:
                output['type'] = types
                output['weakness'] = poke_weakness
            else:
                output['result'] = 'error'
                output['message'] = 'pokemon not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)

    def GET_STRENGTH(self, types): #given 
        output = {'result' : 'success'}
        try:
            poke_strength = self.pdb.get_strength(types)
            if poke_strength is not None:
                output['type'] = types
                output['strength'] = poke_strength
            else:
                output['result'] = 'error'
                output['message'] = 'pokemon not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)