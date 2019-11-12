from _pokemon_database import _pokemon_database
import unittest

class TestPokemonDatabase: 
    poke_name = 'bulbasaur'
    poke_type = ''
    pdb = _pokemon_database()

    def test_get_type(self): 
        got_type = self.pdb.get_type(self.poke_name)
        self.assertEqual(got_type, self.poke_type)