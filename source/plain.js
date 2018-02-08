
const plain = (arr=[]) => arr.reduce((accum, current)=>{ 
	if(Array.isArray(current))
		{return accum.concat(plain(current))}
	else{ accum.push(current)  
		return accum
		}
	}
		,[])
