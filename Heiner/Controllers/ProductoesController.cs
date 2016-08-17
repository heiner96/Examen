using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Heiner.Models;

namespace Heiner.Controllers
{
    public class ProductoesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Productoes
        public IQueryable<Producto> GetProductoes()
        {
            return db.Productoes;
        }

        // GET: api/Productoes/5
        [ResponseType(typeof(Producto))]
        public async Task<IHttpActionResult> GetProducto(string id)
        {
            Producto producto = await db.Productoes.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // PUT: api/Productoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProducto(string id, Producto producto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != producto.ID)
            {
                return BadRequest();
            }

            db.Entry(producto).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Productoes
        [ResponseType(typeof(Producto))]
        public async Task<IHttpActionResult> PostProducto(Producto producto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Productoes.Add(producto);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductoExists(producto.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = producto.ID }, producto);
        }

        // DELETE: api/Productoes/5
        [ResponseType(typeof(Producto))]
        public async Task<IHttpActionResult> DeleteProducto(string id)
        {
            Producto producto = await db.Productoes.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }

            db.Productoes.Remove(producto);
            await db.SaveChangesAsync();

            return Ok(producto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductoExists(string id)
        {
            return db.Productoes.Count(e => e.ID == id) > 0;
        }
    }
}