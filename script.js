const net = new brain.NeuralNetwork();
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},
{"input":{"r":1,"g":1,"b":1},"output":[0]},
{"input":{"r":0.6497668762216575,"g":0.32356638228488044,"b":0.0818291755578835},"output":[1]},
{"input":{"r":0.8796958509272097,"g":0.44441408105941593,"b":0.7408100577655607},"output":[1]},
{"input":{"r":0.9104756291274967,"g":0.3817825564437818,"b":0.6505729174893431},"output":[1]},
{"input":{"r":0.727396546400495,"g":0.5744794084098557,"b":0.7625031369185429},"output":[1]},
{"input":{"r":0.6780130852423061,"g":0.6410957326875941,"b":0.0724977380662657},"output":[1]},
{"input":{"r":0.4730689299954025,"g":0.646322346702461,"b":0.07290992828391651},"output":[1]},
{"input":{"r":0.5283876883830312,"g":0.9336516237487149,"b":0.21640329022489047},"output":[0]},
{"input":{"r":0.8056904180633093,"g":0.2331047964020434,"b":0.5792440630690945},"output":[1]},
{"input":{"r":0.6722589749786789,"g":0.5354314675831349,"b":0.6248171008177414},"output":[1]},
{"input":{"r":0.4754454415829883,"g":0.098674773704299,"b":0.8151061164072517},"output":[1]},
{"input":{"r":0.15767799397421522,"g":0.3404531105494295,"b":0.6120031940926718},"output":[1]},
{"input":{"r":0.28922814200891245,"g":0.2981130606343547,"b":0.832811334826862},"output":[1]},
{"input":{"r":0.557756196553642,"g":0.11604789193278608,"b":0.20229692790188625},"output":[1]},
{"input":{"r":0.29243020928748953,"g":0.5461478171735403,"b":0.0830311571717468},"output":[1]},
{"input":{"r":0.12131589726607217,"g":0.32055537041906645,"b":0.10204319242395976},"output":[1]},
{"input":{"r":0.0626467876605874,"g":0.8649215509601953,"b":0.9296947882448723},"output":[0]},
{"input":{"r":0.6521842894838175,"g":0.06871684651131615,"b":0.49235627493491974},"output":[1]},
{"input":{"r":0.010004809628256117,"g":0.4430145090118107,"b":0.1669172464715245},"output":[1]},
{"input":{"r":0.5598366058023805,"g":0.40734682124063903,"b":0.07131659488217879},"output":[1]},
{"input":{"r":0.8667039460967645,"g":0.9969834315628185,"b":0.9384834554992085},"output":[0]},
{"input":{"r":0.793223234087405,"g":0.8538446285625443,"b":0.513453432803584},"output":[0]},
{"input":{"r":0.8202856220781394,"g":0.6889396770018443,"b":0.06157343759527789},"output":[0]},
{"input":{"r":0.02234920586839184,"g":0.7468205342671579,"b":0.4301544225487022},"output":[1]},
{"input":{"r":0.9372074896773783,"g":0.9413127233489429,"b":0.6367704552074422},"output":[0]},
{"input":{"r":0.40303220825360686,"g":0.4937185916538198,"b":0.35911396269444484},"output":[1]}]
net.train(data);
const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
setRandomColor()
whiteButton.addEventListener('click',()=>{
    chooseColor(1)
})
blackButton.addEventListener('click',()=>{
    chooseColor(0)
})
printButton.addEventListener('click', print)

function chooseColor(value){
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}
function print(){
    console.log(JSON.stringify(data))
}

function setRandomColor(){
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }
    const guess = net.run(color)[0]
    guessEl.style.color = guess >.5 ? '#FFF' : '#000'
    colorEl.style.backgroundColor =
    `rgba(${color.r *255},${color.g *255},${color.b *255})`
}

