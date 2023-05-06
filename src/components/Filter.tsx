
type names = {
  name:string
}


export default function Filter({name}:names) {
  return (
    <main className="bg-white">
      <form>
        <input type='text' className='outline-none border border-gray-200' placeholder={`${name}...`} />
      </form>
    </main>
  )
}

// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users
// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id