
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Resolver from '@rsksmart/rns-resolver.js'

// @ts-ignore
// eslint-disable-next-line new-cap
const resolver = new Resolver.forRskTestnet()

const AddressField = ({ receiverAddress, onReceiverAddressChange } : any) => {
  const [to, setTo] = useState('')
  const [resolverStatus, setResolverStatus] = useState('')
  const rskDomainValidation = (e:any) => {
    const selectedTo = (e && e.target && e.target.value)
    setTo(selectedTo)
    if (!selectedTo) {
      return
    }

    const re = /\.rsk$/ // match *.rsk domains
    const isValid = re.test(String(selectedTo).toLowerCase())

    if (!selectedTo) {
      setResolverStatus('')
    } else if (!isValid) {
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
      <TextField id="to" value={to} onChange={rskDomainValidation} autoComplete='off'/>
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
