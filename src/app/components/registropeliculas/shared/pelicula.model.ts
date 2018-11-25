export class Pelicula{
    // Se mapean los valores necesarios para mapear en la aplicacion una pelicula.
    NombreOriginal : String;
    Nombre : String;
    Imagen : String;
    Duracion : number;
    NombreDirector : String;
    ApellidoDirector : String;
    Clasificacion : String;
    //--------------------------------------
    ID_Pelicula : number;
    //Sirve para obtener una instancia particular en el formato requerido para enviar al API.
    gett(){
        return this.Nombre  + "&" +
        this.NombreOriginal + "&" +
        this.Duracion       + "&" +
        this.NombreDirector + "&" +
        this.ApellidoDirector+"&" +
        this.Clasificacion;
    }
}
