function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

delay(3000).then(()=>alert('3sec later'));









