import "./LaiXuat.css"
import invest from "../assets/invest.png"
import React,{useState} from "react";

function LaiXuat() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const [data, setData] = useState([]);

    let rows = [];
    let soTienNhanDuoc = 0;
    let soTienBanDau = a;
    let nam = 2025;
    function onClick(){
        while(soTienNhanDuoc < c){
           soTienNhanDuoc = soTienBanDau * (1 + b/100);
           rows.push(
            <tr>
                <td>{nam+=1}</td>
                <td>{soTienBanDau}</td>
                <td>{b}</td>
                <td>{soTienNhanDuoc}</td>
            </tr>
           )
           soTienBanDau = soTienNhanDuoc;
        }
        
        setData(rows);
    }

    function handleChangeA(e){
        setA(e.target.value);
    }

    function handleChangeB(e){
        setB(e.target.value);
    }

    function handleChangeC(e){
        setC(e.target.value);
    }

    return ( <div className="container max-w-10/12 m-auto">
        <img src={invest} alt="" />
        <input type="text" name="" id="" placeholder="Nhap so tien ban dau" onChange={handleChangeA} className="border-1 border-gray-500 rounded-lg p-2"/>
        <input type="text" placeholder="Nhap lai xuat" onChange={handleChangeB} className="border-1 border-gray-500 rounded-lg p-2"/>
        <input type="text" name="" id="" placeholder="Nhap so tien muon nhan" onChange={handleChangeC} className="border-1 border-gray-500 rounded-lg p-2"/>

        <button onClick={onClick} className="px-3 py-1 border-1 border-gray-500 rounded-lg hover:bg-green-200 cursor-pointer">Click</button>

        <table>
            <tr>
                <th>Nam</th>
                <th>So tien gui</th>
                <th>Lai xuat</th>
                <th>So tien nhan</th>
            </tr>
            <tbody>
                {data}
            </tbody>
        </table>
    </div> );
}

export default LaiXuat;