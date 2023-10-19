package mx.uv;

import static spark.Spark.*;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola mundo" );

        get("/", (request, response) -> {
            return "<h1>Hola mundo</h1>";
        });
         get("/ruta1", (request, response) -> {
            return "<h1>Hola mundo XD</h1>";
        });
         get("/ruta2", (request, response) -> {
            return "{'alumno':'Juan','Matricula':'vad','Carrera':'TC'}";
        });
         get("/ruta3", (request, response) -> {
            return "<h1>Byeee</h1>";
        });
    }
}
