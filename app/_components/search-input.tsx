import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function SearchInput() {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Pesquise serviços ou barbearias"
        className="border-border h-8 rounded-full"
      />
      <Button variant="outline" className="h-8 w-8">
        <SearchIcon />
      </Button>
    </div>
  )
}

export default SearchInput
