import { useState } from 'react';


function OneCharge({ numberOfCharges }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            <div style={numberOfCharges > 0 ? { height: 20, width: 60, backgroundColor: '#0081AE', borderRadius: 5 } : { height: 18, width: 58, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
        </div>
    )
}


export default OneCharge