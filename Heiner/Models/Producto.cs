using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Heiner.Models
{
    public class Producto
    {
        /// <summary>
        /// id=primary key
        /// </summary>
        public string ID { get; set; }
        public string nombre;
        public string marca;
        public string familia;
        public string casafabricacion;
        public string tipounidad;
        public string departamento;
        public string activo;
        public string fechaingreso;
        public string unidad;
        public string impuesto;
    }
}