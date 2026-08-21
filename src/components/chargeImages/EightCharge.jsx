import { useState } from 'react';


function EightCharge({ numberOfCharges }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
            { numberOfCharges === 0 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 1 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 2 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 3 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 4 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 5 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 6 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 7 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 18, width: 4.6, backgroundColor: '#00293d', borderWidth: 1, borderStyle: 'solid', borderColor: '#0081ae', borderRadius: 5 }} />
                </div>
            )}

            { numberOfCharges === 8 && (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                    <div style={{ height: 20, width: 6.6, backgroundColor: '#0081AE', borderRadius: 5 }} />
                </div>
            )}
        </div>
    )
}


export default EightCharge