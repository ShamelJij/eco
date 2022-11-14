# eco
### projekt solar repository

```
+---diagrams
+---public
+---server
|   +---gradle
|   |   +---wrapper
|   +---src
|       +---main
|       |   +---java
|       |   |   +---com
|       |   |       +---eco
|       |   |           +---eco
|       |   +---resources
|       +---test
|           +---java
|               +---com
|                   +---eco
|                       +---eco
+---text

```

# Building docker containers.
1- server. in the server folder type ``` docker build --build-arg JAR_FILE=build/libs/*.jar -t eco-server:0.0.3 .```
2- ui. in the ui folder type ```docker build -t eco-ui:0.0.1 .```

# Starting the stack
In the eco folder run ```docker compose -f docker-compose.yml up -d ```

# Stopping the stack
In the eco folder run ```docker compose -f docker-compose.yml down ```


