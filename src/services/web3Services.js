import Web3 from "web3";
import ABI from "./ABI.json";

const contractAddress = process.env.NEXT_PUBLIC_BSC_CONTRACT_ADDRESS;

export async function doLogin() {
    if (!window.ethereum) throw new Error("Sem MetaMask instalada!");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("Carteira não permitida!");

    localStorage.setItem("wallet", accounts[0].toLowerCase());
    return accounts[0];
}

function getContract() {
    if (!window.ethereum) throw new Error("Sem MetaMask instalada!");

    const from = localStorage.getItem("wallet");
    const web3 = new Web3(window.ethereum);

    return new web3.eth.Contract(ABI, contractAddress, { from });
}

export async function getCoursePrice(id) {
    try {
        const contract = getContract();
        const price = await contract.methods.getCoursePrice(id).call();
        return price;
    } catch (error) {
        console.error("Erro ao buscar o preço do curso:", error);
        throw error;
    }
}

export async function web3BuyCourse(courseId, email, coursePriceInEther) {
    try {
        const contract = getContract();
        const from = localStorage.getItem("wallet");
        const response = await contract.methods.buyCourse(courseId, email).send({
            from,
            value: Web3.utils.toWei(coursePriceInEther, "ether")
        });
        return response;
    } catch (error) {
        console.error("Erro ao comprar o curso:", error);
        throw error;
    }
}

export async function setCoursePrice(courseId, price) {
    try {
        const contract = getContract();
        const from = localStorage.getItem("wallet");
        const response = await contract.methods.setCoursePrice(courseId, price).send({ from });
        return response;
    } catch (error) {
        console.error("Erro ao definir o preço do curso:", error);
        throw error;
    }
}

export async function setMultipleCoursePrices(ids, prices) {
    try {
        const contract = getContract();
        const from = localStorage.getItem("wallet");
        const response = await contract.methods.setMultipleCoursePrices(ids, prices).send({ from });
        return response;
    } catch (error) {
        console.error("Erro ao definir preços múltiplos de cursos:", error);
        throw error;
    }
}

export async function checkAccess(courseId) {
    try {
        const contract = getContract();
        const access = await contract.methods.checkAccess(courseId).call();
        return access;
    } catch (error) {
        console.error("Erro ao verificar acesso ao curso:", error);
        throw error;
    }
}

export async function getAllCourseIds() {
    try {
        const contract = getContract();
        const ids = await contract.methods.getAllCourseIds().call();
        return ids;
    } catch (error) {
        console.error("Erro ao obter todos os IDs de cursos:", error);
        throw error;
    }
}

export async function getAllCoursePrices() {
    try {
        const contract = getContract();
        const prices = await contract.methods.getAllCoursePrices().call();
        return prices;
    } catch (error) {
        console.error("Erro ao obter todos os preços de cursos:", error);
        throw error;
    }
}

export async function getCoursesByEmail(email) {
    try {
        const contract = getContract();
        const courses = await contract.methods.getCoursesByEmail(email).call();
        return courses;
    } catch (error) {
        console.error("Erro ao obter cursos por email:", error);
        throw error;
    }
}