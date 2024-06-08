import React from 'react'
function Result(){
    return(
        <div>
            <div>
                <h2>Result</h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={''}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}
export default Result