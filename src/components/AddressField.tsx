
import React, { useState } from 'react'
import { TextField } from '@mui/material'

interface IEvent{
  target: { value }
}
export interface IAddressFieldInput{
  label: string
  onReceiverAddressChange: (address: string) => void
  resolverFn: (domain: string) => Promise<string>;
  regexValidation: RegExp
}
const AddressField = ({ label, onReceiverAddressChange, resolverFn, regexValidation = /\.rsk$/ } : IAddressFieldInput) => {
  const [to, setTo] = useState('')
  const [resolverStatus, setResolverStatus] = useState('')

  const setAddressOrDomainResolution = (e:IEvent) => {
    const selectedTo = (e && e.target && e.target.value)
    setTo(selectedTo)
    if (!selectedTo) {
      return
    }

    // const re = /\.rsk$/ // match *.rsk domains
    const r = new RegExp(regexValidation)
    const isDomain = r.test(String(selectedTo).toLowerCase())

    if (!selectedTo) {
      setResolverStatus('')
    } else if (!isDomain) {
      onReceiverAddressChange(selectedTo)
      setResolverStatus('')
    } else {
      setResolverStatus('Fetching address...')
      resolverFn(selectedTo).then((address:string) => {
        onReceiverAddressChange(address)
        setResolverStatus(address)
      }).catch((e:any) => {
        console.log(e)
        setResolverStatus('Domain with no address')
      }) // gets rs
    }
  }
  return (
    <div>
      <TextField id="to" value={to} label={label} onChange={setAddressOrDomainResolution} autoComplete='off'/>
  <div style={{
    marginTop: '5px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold'
  }} className={'resolverStatus'}>{resolverStatus}</div>
    </div>
  )
}
export default AddressField
