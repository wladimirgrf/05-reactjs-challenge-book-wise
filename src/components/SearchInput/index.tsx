import { ComponentProps } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { SearchContainer, TextInput } from './styles'

interface SearchInputProps extends ComponentProps<typeof TextInput> {
  _size?: 'md' | 'full'
}

export function SearchInput({ _size, ...props }: SearchInputProps) {
  return (
    <SearchContainer size={_size}>
      <TextInput placeholder="Search for book or author" {...props} />
      <MagnifyingGlass size={20} />
    </SearchContainer>
  )
}
