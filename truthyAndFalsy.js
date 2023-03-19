/**
 * falsy value are 6:
 * 1. "" empty
 * 2. false
 * 3.undefine
 * 4. NaN
 * 5. 0
 * 6. null
 * 
 * Without this 6 value are ever value are truthy value.
 */
const item = null;
if(item){
    console.log("truthy");
} else{
    console.log("falsy");
}