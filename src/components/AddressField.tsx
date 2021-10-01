
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Resolver from '@rsksmart/rns-resolver.js'

// @ts-ignore
// eslint-disable-next-line new-cap
const resolver = new Resolver.forRskTestnet()
interface IEvent{
  target: { value }
}
export interface IAddressFieldInput{
  label: string
  onReceiverAddressChange: (address: string) => void
}
const AddressField = ({ label, onReceiverAddressChange } : IAddressFieldInput) => {
  const [to, setTo] = useState('')
  const [resolverStatus, setResolverStatus] = useState('')
  const setAddressOrDomainResolution = (e:IEvent) => {
    const selectedTo = (e && e.target && e.target.value)
    setTo(selectedTo)
    if (!selectedTo) {
      return
    }

    const re = /\.rsk$/ // match *.rsk domains
    const isDomain = re.test(String(selectedTo).toLowerCase())

    if (!selectedTo) {
      setResolverStatus('')
    } else if (!isDomain) {
      onReceiverAddressChange(selectedTo)
      setResolverStatus('')
    } else {
      setResolverStatus('Fetching address...')
      resolver.addr(selectedTo).then((address:string) => {
        onReceiverAddressChange(address)
        setResolverStatus(address)
      }).catch((e:any) => {
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
