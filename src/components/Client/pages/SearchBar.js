import {React , useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
function SearchBar() {
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    console.log(search);
  }
  return (
    <div className='container main--cont  p-0'>
        <div className='container main--child  p-0'>
            <div className='search-Bar '>
                <div className='w-80'>
                    <div className='d-flex align-items-center position-relative'>
                        <input type='text' placeholder='Search' name='search' onChange={(e)=> setSearch(e.target.value)} className='form-control' />
                        <div className='svgdiv' onClick={handleSearch}><SendIcon className='send--svg'/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar