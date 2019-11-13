from _pokemon_database import _pokemon_database
import unittest
import requests
import json

class TestPokemonDatabase(unittest.TestCase): 
    SITE_URL = 'https://pokeapi.co/api/v2/'
    POKEMON_URL = SITE_URL + '/pokemon/'
    TYPE_URL = SITE_URL + '/type/'
    '''These declarations are for the main.py tests later '''
    # SITE_URL = 'http://student04.cse.nd.edu:51053'
    # POKEMON_URL = SITE_URL + '/pokemon/'
    
    pdb = _pokemon_database()
    def is_json(self, resp):
        try:
            json.loads(resp)
            return True
        except ValueError:
            return False

    '''This function is a test case for main.py'''
    # def test_get_type(self): 
    #     poke_name = 'bulbasaur'
    #     poke_type = ['grass', 'poison']
    #     r = requests.get(self.POKEMON_URL+ str(poke_name))
    #     self.assertTrue(self.is_json(r.content.decode('utf-8')))
    #     resp = json.loads(r.content.decode('utf-8'))
    #     self.assertEqual(resp['type'], poke_type)

    def test_get_weakness_type(self):
        poke_type = 'fire'
        check_type = 'ground'
        check_type2 = 'rock'
        r = requests.get(self.TYPE_URL + str(poke_type))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['damage_relations']['double_damage_from'][0]['name'], check_type)
        self.assertEqual(resp['damage_relations']['double_damage_from'][1]['name'], check_type2)

    def test_get_strength_type(self):
        poke_type = 'water'
        check_type = 'ground'
        check_type2 = 'rock'
        r = requests.get(self.TYPE_URL + str(poke_type))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['damage_relations']['double_damage_to'][0]['name'], check_type)
        self.assertEqual(resp['damage_relations']['double_damage_to'][1]['name'], check_type2)

    def test_get_pokemon_from_type(self):
        poke_return = 'dratini'
        poke_type = 'dragon'
        r = requests.get(self.TYPE_URL + str(poke_type))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['pokemon'][0]['pokemon']['name'], poke_return)

if __name__ == '__main__': 
    unittest.main() 