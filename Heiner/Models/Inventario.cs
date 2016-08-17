using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Heiner.Models
{
    public class Inventario
    {
        /// <summary>
        /// id/primary
        /// </summary>
        public string ID { get; set; }
        public int idproducto;
        public int cantidad;
        public int cantidadminima;
        public int cantidadmaxima;
        public int gravadoexcepto;
    }
}