
import React, { useState } from 'react'
import TextFieldWithLabel from './TextFieldWithLabel'

interface IEvent{
  target: {
    value: string
  }
}
export interface IAddressFieldInput{
  id: string
  label: string
  onReceiverAddressChange: (address: string) => void
  resolverFn: (domain: string) => Promise<string>;
  regexValidation: RegExp
}

const AddressField = ({ id, label, onReceiverAddressChange, resolverFn, regexValidation = /\.rsk$/ } : IAddressFieldInput) => {
  const [to, setTo] = useState('')
  const [resolverStatus, setResolverStatus] = useState('')

  const setAddressOrDomainResolution = async (e: IEvent) => {
    const selectedTo = e.target.value
    setTo(selectedTo)

    if (!selectedTo) {
      return
    }

    const isDomain = new RegExp(regexValidation).test(selectedTo.toLowerCase())

    if (!isDomain) {
      onReceiverAddressChange(selectedTo)
      setResolverStatus('')
    } else {
      setResolverStatus('Fetching address...')

      try {
        const address = await resolverFn(selectedTo)

        onReceiverAddressChange(address)
        setResolverStatus(address)
      } catch (error) {
        console.error(error)
        setResolverStatus('Error: Domain has no address set')
      }
    }
  }
  return (
    <TextFieldWithLabel
      key={id}
      id={id}
      value={to}
      label={label}
      error={resolverStatus.toLowerCase().includes('error')}
      helperText={resolverStatus}
      onChange={setAddressOrDomainResolution}
      autoComplete='off'
    />
  )
}
export default AddressField
