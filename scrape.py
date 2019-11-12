import json
import requests

SITE_URL = 'https://pokeapi.co/api/v2'
POKEMON_URL = SITE_URL + '/pokemon/'
POKEMON_LOAD_URL = SITE_URL + '/pokemon/?limit=1000'
pokemon_dict = {}
pokemon_info = {}

r = requests.get(POKEMON_LOAD_URL)
r = json.loads(r.content.decode('utf-8'))
for i, val in enumerate(r['results']):
    line = val['name']
    line = line.rstrip()
    pokemon_dict[i] = line



for pokemon in pokemon_dict.values():
    r = requests.get(POKEMON_URL + str(pokemon))
    r = json.loads(r.content.decode('utf-8'))
    if r['types'][0]['slot'] == 2:
        value = {r['types'][1]['type']['name'], r['types'][0]['type']['name']}
    else:
        value = r['types'][0]['type']['name']
    pokemon_info[pokemon] = value

with open('pokemon_info.json', 'w') as json_file:
    json.dump(pokemon_info, json_file)