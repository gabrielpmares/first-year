# Autor: Gabriel Pedro Mares Azevedo
# Este projeto foi realizado em dezembro de 2020 na disciplina de Programação I

# O objetivo deste projeto é criar aglomerados (clusters) baseado em uma distribuição de pontos

### IMPORTS ###
import math
import matplotlib.pyplot as plt
import numpy as np
###############

### FUNCOES ###
def distancia(pt1, pt2):
    resultado = math.sqrt((pt1[0]-pt2[0])**2+(pt1[1]-pt2[1])**2)
    return resultado

def sugerirCentroide(centroides, pt):
    lista = []
    for ponto in centroides:
        lista.append(distancia(pt,ponto))
    resultado = lista.index(min(lista))
    return resultado

def encontrarCentroMassa(pts):
    numPontos = len(pts)
    abcissa = 0
    ordenada = 0
    for ponto in pts:
        abcissa += ponto[0]
        ordenada += ponto[1]
    resultado = (abcissa/numPontos,ordenada/numPontos)
    return resultado

def aglomerar(k, pts, tol=0.001, maxIter=500):
    cluster = []
    novosCentros = []
    aglomerado = [[] for _ in range(k)]
    for i in pts:
        cluster.append(i)
        if len(cluster) == k:
            break
    for ponto in pts:
        aglomerado[sugerirCentroide(cluster,ponto)].append(ponto)
    for x in aglomerado:
        novosCentros.append(encontrarCentroMassa(x))
    return aglomerarAux(k, pts, 0.001, maxIter, novosCentros)

def aglomerarAux(k, pts, tol, maxIter, cluster):
    novosCentros = []
    aglomerado = [[] for _ in range(k)]
    var = 0
    for ponto in pts:
        aglomerado[sugerirCentroide(cluster,ponto)].append(ponto)
    for x in aglomerado:
        novosCentros.append(encontrarCentroMassa(x))
    maxIter -= 1
    if maxIter == 0:
        return novosCentros
    for i in range(len(novosCentros)):
        var += distancia(novosCentros[i],cluster[i])
    if var <= tol:
        return novosCentros
    return aglomerarAux(k, pts, tol, maxIter, novosCentros)

def custear(centros, pts):
    resultado = 0
    for i in pts:
        var = centros[sugerirCentroide(centros,i)]
        resultado += distancia(i,var)**2
    return resultado

def sugerirK(pts, minK=2, maxK=10):
    grafico = []
    for k in range(minK,maxK+1):
        grafico.append(round(custear(aglomerar(k,pts),pts)*k**1.5))
    resultado = grafico.index(min(grafico)) + minK
    return resultado
        
def criarDados(k, ns, mus, covs, seed=-1):
    """
    k    : número de aglomerados
    ns   : lista com os tamanhos de cada aglomerado
    mus  : lista dos centros de cada aglomerado
    covs : lista com as matrizes de covariância
    seed : valor para controlar a aleatoriadade (default -1 -> imprevísivel)
    
    retorna uma lista de pares com coordenadas (x,y)
    """
    if seed != -1:
        np.random.seed(seed)
    xs = []
    ys = []
    for i in range(k):
        x,y = np.random.multivariate_normal(mus[i], covs[i], ns[i]).T
        xs.extend(x)
        ys.extend(y)
    
    return (xs,ys)

def criarPontos(ns, seed=-1):
    """
    requires: len(ns) < 8
    """
    k    = len(ns)
    mus  = [[0, 0], [5,5], [4,-5],[-5,-5],[-4,5],[-7.5,0],[0,8]]
    covs = [
        [[2,    0], [    0,  2]],
        [[1, -0.5], [ -0.5,  1]],
        [[2, 0.75], [ 0.75, .5]],
        [[2, 0.75], [ 0.75, .5]],
        [[2,-0.75], [-0.75,  1]],
        [[1, -0.5],  [-0.5,  1]],
        [[1, -0.5], [ -0.5,  1]],
        ]

    x,y = criarDados(k, ns[:k], mus[:k], covs[:k], seed)
    pts = [ (x[i],y[i]) for i in range(len(x))]
    return pts


# As funções criarDados e criarPontos não fui eu quem criei! O professor disponibilizou na época. 


