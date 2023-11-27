package mx.uv;

import static spark.Spark.*;
import  com.google.gson.*;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola mundo" );
        //fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
                }
            return "OK";
        });

before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        get("/", (request, response) ->"<h1>Hola mundo</h1>");
         get("/ruta1", (request, response) -> {
            return "<h1>Hola mundo XD</h1>";
        });
         get("/ruta2", (request, response) -> {
            response.type("application/json");
            return "{\"alumno\":\"Juan\"}";
        });
         get("/ruta3", (request, response) -> {
            return "<h1>Byeee</h1>";
        });
        get("/ruta4", (request,response)->{
            String parametro = request.queryParams("nombre");
            System.out.println("Tipo de contenido "+ request.contentType());
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("msj", "Hola");
            respuesta.addProperty("apellido", parametro);
            response.type("application/json");
            return respuesta;
        });
        post("/ruta4", (request,response)->{
            //String parametro = request.queryParams("nombre");
            String parametro = request.body();
            System.out.println("Tipo de contenido "+ request.contentType());
            System.out.println("El body tiene "+ parametro);
            JsonParser parser = new JsonParser();
            //acceder a alos parametros
            JsonElement arbol = parser.parse(parametro);


//costruir la respuesta
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("msj", "Hola");
            respuesta.addProperty("apellido", arbol.getAsJsonObject().get("nombre").getAsString());
            response.type("application/json");
            return respuesta;
        });
    }
}
