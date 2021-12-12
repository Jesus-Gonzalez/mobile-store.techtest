# Mobile Store Tech-Test

# English

## Welcome

Welcome to the "Mobile Store TechTest"

## Overview

The "Mobile Store TechTest" project delivers a mobile phones store where we list and navigate to the devices' details.

## Scripts

I've used create-react-app for simplicity:

The scripts we are going to use in the techtest are the following:

- `start` starts development mode.
- `build` executes the production build of the application.

## Technologies

The following stack has been used:

- react
- redux
- react-redux
- redux-thunk
- reselect
- react-router
- styled-components
- eslint
- editorconfig
- prettier
- husky (git hooks)
- yarn

## Structure

The project source code is in the `src` directory.

I have divided the `core` and `app` parts of the application in independent directories.

The pages are defined in the `app/pages` directory, where each module contains the necessary components and logic components to run itself.

## Architecture

I am using react-hooks all the way through.

I have tried to make the architecture, logic and components easy to read and understand.

## About the Design

Because the tech-test is focused on development and architectural challenges, I have developed the esential and basic design and followed to demonstrate the capabilities of react, redux and how to write and architecture an SPA.

## Testing

I've implemented unit testing with `jest` and `@testing-library`.

I have not tested **all** the application, only a few components and modules.

I have not tested because it requires an extensive setup and mocking, and due to the technical test deadlines and the time I'm able to dedicate to it, I'm not able to implement it fully.

# About "Add to Cart"

During development, regarding the feature `Add to Cart`, the browser prevented and blocked the request to the /api/cart endpoint due to a CORS issue. I've solved it installing an extension to allow CORS and ignore the browser defaults.

# Español

## Bienvenido

Bienvenido al proyecto "Mobile Store TechTest"

## Descripción

El proyecto muestra una tienda de teléfonos móviles donde listamos y navegamos a los detalles de los dispositivos. Podemos añadir productos seleccionando caraceterísticas.

## Scripts

He utlizado create-react-app para simplificar el desarrollo y setup.

Los scripts que se utilizan son los siguientes:

- `start` inicia el modo desarrollo.
- `build` ejecuta la build de producción.

## Tecnologías

He utilizado el stack siguiente:

- react
- redux
- react-redux
- redux-thunk
- reselect
- react-router
- styled-components
- eslint
- editorconfig
- prettier
- husky (git hooks)
- yarn

## Estructura

El código fuente se encuentra en `src`.

He dividido en partes `core` y `app` en directorios independientes.

Las páginas se definen en `app/pages` donde cada una está encapsulada y modularizada, incluyendo los componentes necesarios y su lógica para ser mostradas.

## Arquitectura

He intentado hacer la arquitectura, lógica y componentes fácil de leer y entender.

## Sobre el Diseño

Porque la prueba está enfocada en desafíos de desarrollo y arquitectónicos, he desarrollado un diseño básico y esencial, y he proseguido a demostrar las capacidades de react, redux y cómo escribir components y crear la arquitectura de una aplicación SPA.

## Testing

He implementado unit testing simple con `jest` y `@testing-library`.

No he testeado **toda** la aplicación, solamente algunos componentes y módulos.

No lo he testeado porque necesita un mocking y setup más extenso, y debido a la fecha límite de entrega y el tiempo que soy capaz de dedicar a la prueba, no soy capaz de implementarlo por completo.

# Sobre "Añadir al Carro"

Durante el desarrollo, con relación a la funcionalidad `Añadir al carro`, el navegador indicaba que existía un problema de CORS, el cual he solucionado instalando `CORS Everywhere`, una extensión que ignora la configuración de CORS por defecto del navegador.
