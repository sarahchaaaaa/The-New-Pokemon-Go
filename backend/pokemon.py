'''
pokemon.py fully depends on the _pokemon_database for its query results

the PokemonController initially loads all of the data (type, weaknesses, strengths, etc) from files
once all of the data is loaded in, our server fully relies on the stored data to fill queries
'''

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

        self.pdb.load_pokemon('newPokemon.json')
        self.pdb.load_pokemon_info('pokemon_info.json') #create this method
        self.pdb.load_weakness_info('type_weakness.json')
        self.pdb.load_strength_info('type_strength.json')
        self.pdb.load_types_pokemon_info('typeofPokemon.json')
        #TODO load other resource files

    def GET(self): #given 
        output = {'result': 'success'}
        entries = []
        try:
            for item in self.pdb.pokemon.keys():
                get_all = {}
                PID = item
                get_all['name'] = PID     
                print(item)
                get_all['id'] = (self.pdb.pokemon[item])               
                entries.append(get_all)

            output = {"pokemon": entries, 'result':'success'}
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

    def GET_TYPES_POKEMON(self, ptype):
        output = {'result' : 'success'}
        try:
            types_pokemon = self.pdb.get_types_pokemon(ptype)
            if types_pokemon is not None:
                output['type'] = ptype
                output['pokemon with typing'] = types_pokemon
            else:
                output['result'] = 'error'
                output['message'] = 'type not found'
        except Exception as ex:
            output['result'] = 'error'
            output['message'] = str(ex)

        return json.dumps(output)
