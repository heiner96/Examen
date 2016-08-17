using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Heiner.Models
{
    public class Cliente
    {
        /// <summary>
        /// primary key=ID/cedula
        /// </summary>
        public string ID { get; set; }
        public string nombre;
        public string apellido;
        public string fechanacimiento;
        public string direccion;
        public string estadocivil;
        public string sexo;
        public string fechaingreso;
        public string tipo;
        public string descuento;
    }
}