import json
class _pokemon_database:

    def __init__(self):
        self.types = dict()
        self.pokemon = dict()
        self.pokemon_info = dict()

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
            
    def get_type(self, name): 
        if name in self.pokemon_info:
            return self.pokemon_info[name]
        else:
            return

if __name__ == '__main__':     
    pdb = _pokemon_database()