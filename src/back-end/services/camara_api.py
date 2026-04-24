import requests
import time

URL_BASE = "https://dadosabertos.camara.leg.br/api/v2"


def listar_proposicoes():
    url = f"{URL_BASE}/proposicoes"

    for _ in range(3):
        resposta = requests.get(
            url,
            params={"itens": 5},
            headers={"Accept": "application/json"},
            timeout=20
        )

        if resposta.status_code == 200:
            dados = resposta.json()
            return dados["dados"]

        if resposta.status_code == 504:
            print("A API demorou para responder. Tentando novamente...")
            time.sleep(2)

    print("Não foi possível acessar a API.")
    return []