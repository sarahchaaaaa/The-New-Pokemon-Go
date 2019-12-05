from _pokemon_database import _pokemon_database
import unittest
import requests
import json

class TestPokemonDatabase(unittest.TestCase): 
    SITE_URL = 'http://student04.cse.nd.edu:51053'
    POKEMON_URL = SITE_URL + '/pokemon'
    WEAKNESS_URL = SITE_URL + '/weakness/'
    STRENGTH_URL = SITE_URL + '/strength/'
    
    pdb = _pokemon_database()
    def is_json(self, resp):
        try:
            json.loads(resp)
            return True
        except ValueError:
            return False

    '''This function is a test case for get_type'''
    def test_get_type(self): 
        poke_name = 'bulbasaur'
        poke_type = ['grass', 'poison']
        r = requests.get(self.POKEMON_URL+ '/' + str(poke_name))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['type'], poke_type)

    def test_get_weakness(self): 
        poke_type = 'fire'
        poke_weakness = ["ground", "rock", "water"]
        r = requests.get(self.WEAKNESS_URL + str(poke_type))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['weakness'], poke_weakness)

    def test_get_strength(self): 
        poke_type = 'poison'
        poke_strength = ["grass", "fairy"]
        r = requests.get(self.STRENGTH_URL + str(poke_type))
        self.assertTrue(self.is_json(r.content.decode('utf-8')))
        resp = json.loads(r.content.decode('utf-8'))
        self.assertEqual(resp['strength'], poke_strength)


if __name__ == '__main__': 
    unittest.main() 