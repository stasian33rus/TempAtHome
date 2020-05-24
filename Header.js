import React from 'react';

export function Head (){
    return (
        <div class="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/" >Температура дома</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Рабочий стол<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Датчики
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/allCounters">Все датчики температуры</a>
                                <a class="dropdown-item" href="/tempHistory">История температур</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Избранные датчики</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline mx-2 my-2 my-lg-0">
                        <input class="form-control mx-2 mr-sm-2" type="search" placeholder="Поиск датчиков" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
