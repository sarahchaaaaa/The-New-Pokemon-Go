'''
all _pokemon_database dictionaries are loaded through data files kept on the same machine

because what we are trying to do often requires lots of different data per user search, 
we felt it was better to make all of the queries to the Pokemon Go API initially and store the data

an example of the data requirements for a task would be: returning the types a pokemon is weak against;
querying the Pokemon Go API for a pokemon's data only returns its name, type, and other information;
data about types the pokemon is weak to is not returned in that query, 
and would require more queries to the Pokemon Go API to return the proper result to the user
'''

import json
class _pokemon_database:

    def __init__(self):
        self.types = dict()
        self.pokemon = dict()
        self.pokemon_info = dict()
        self.pokemon_weakness = dict()
        self.pokemon_strength = dict()

    def load_pokemon(self, pokemon_file):
        self.pokemon.clear()
        with open(pokemon_file) as json_file:
            self.pokemon = json.load(json_file)
        return self.pokemon

    def load_pokemon_info(self, pokemon_info_file):
        self.pokemon_info.clear()
        with open(pokemon_info_file) as json_file:
            self.pokemon_info = json.load(json_file)
        return self.pokemon_info
    
    def load_weakness_info(self, pokemon_weakness_file):
        self.pokemon_weakness.clear()
        with open(pokemon_weakness_file) as json_file:
            self.pokemon_weakness = json.load(json_file)
        return self.pokemon_weakness

    def load_strength_info(self, pokemon_strength_file):
        self.pokemon_strength.clear()
        with open(pokemon_strength_file) as json_file:
            self.pokemon_strength = json.load(json_file)
        return self.pokemon_strength
            
    def get_type(self, name): 
        if name in self.pokemon_info:
            return self.pokemon_info[name]
        else:
            return
    
    def get_weakness(self, types): 
        if types in self.pokemon_weakness:
            return self.pokemon_weakness[types]
        else:
            return
    
    def get_strength(self, types): 
        if types in self.pokemon_strength:
            return self.pokemon_strength[types]
        else:
            return

if __name__ == '__main__':     
    pdb = _pokemon_database()
