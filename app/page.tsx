import Counter from './hn_column';
export default function Home() {
  return (
    <div className='h-screen'>
    <div className='grid grid-cols-5 gap-6 h-screen content-center'>
      <div className='col-span-3 col-start-2 h-14'>
        <div className="relative mt-1 rounded-md shadow-sm h-14">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <select
              id="search_engine"
              name="search_engine"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>Google</option>
              <option>DDG</option>
              <option>Bing</option>
            </select>
          </div>
          <input
            type="text"
            name="search_query"
            id="search_query"
            className="block w-full rounded-md border-gray-300 pl-20 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-14"
            placeholder=""
          />
        </div>
      </div>

      <div className='col-start-2'>
        <Counter />
      </div>
      <div className='col-start-3'>
        <Counter />
      </div>
      <div className='col-start-4'>
        <Counter />
      </div>
      
    </div>
    </div>
    
  )
}
