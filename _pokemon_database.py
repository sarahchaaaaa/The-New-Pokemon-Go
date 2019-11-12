import requests
import json 

class _pokemon_database:

    def __init__(self):
        self.SITE_URL = 'https://pokeapi.co/api/v2/pokemon/'
        self.types = dict()

    def get_type(self, name): 
        url = self.SITE_URL + str(name) 
        r = requests.get(url)
        resp = json.loads(r.content)
        return(resp['type']['name'])

if __name__ == '__main__':     
    name = 'bulbasaur'
    pdb = _pokemon_database()