import { useQuery } from '@tanstack/react-query'
import { getBeats } from '../apis/beats'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

interface BeatSelectProps {
  onMenuSelectionChange: (selection: string) => void
}

export default function BeatSelect({ onMenuSelectionChange }: BeatSelectProps) {
  const {
    data: beats,
    isLoading,
    isError,
  } = useQuery(['beats'], () => getBeats())

  if (isLoading)
    return (
      <>
        <p>Loading beats...</p>
      </>
    )

  if (isError)
    return (
      <>
        <p>Error loading preset beats</p>
      </>
    )
  const none = 'none'
  // console.log('beats', beats)
  return (
    <>
      <Menu>
        <MenuButton as={Button}>Select preset:</MenuButton>
        <MenuList>
          {beats.map((beat) => (
            <MenuItem
              key={beat}
              onClick={() => {
                onMenuSelectionChange(beat) // Call the additional function
              }}
            >
              {beat}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}