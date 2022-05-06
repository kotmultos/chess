import {Table} from "react-bootstrap";

import './PlayField.css';

const PlayField = () => {
    return (
        <Table bordered className={'mt-3'}>
            <tbody>
            <tr>
                <td className={'bg-opacity-10 bg-success img black-castle'}>8</td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-bishop'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-king'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success img black-castle'}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-50 bg-success img black-pawn'}>7</td>
                <td className={'bg-opacity-10 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-horse'}> </td>
                <td className={'bg-opacity-50 bg-success img black-bishop'}> </td>
                <td className={'bg-opacity-10 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-10 bg-success img black-pawn '}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-10 bg-success'}>6</td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-50 bg-success'}>5</td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img black-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success img black-queen'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success  '}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-10 bg-success img white-horse'}>4</td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-50 bg-success img white-pawn'}>3</td>
                <td className={'bg-opacity-10 bg-success img white-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img white-bishop'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success'}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-10 bg-success'}>2</td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img white-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success img white-bishop'}> </td>
                <td className={'bg-opacity-10 bg-success img white-horse'}> </td>
                <td className={'bg-opacity-50 bg-success'}> </td>
                <td className={'bg-opacity-10 bg-success img white-pawn'}> </td>
                <td className={'bg-opacity-50 bg-success img white-pawn'}> </td>
            </tr>
            <tr>
                <td className={'bg-opacity-50 bg-success img white-castle'}>
                    <div className={'d-flex justify-content-between'}>
                        <div>1</div>
                        <div className={'mt'}>a</div>
                    </div>
                </td>
                <td className={'bg-opacity-10 bg-success  '}>
                    <div className={'text-sm-end mt'}>b</div>
                </td>
                <td className={'bg-opacity-50 bg-success  '}>
                    <div className={'text-sm-end mt'}>c</div>
                </td>
                <td className={'bg-opacity-10 bg-success img white-queen'}>
                    <div className={'text-sm-end mt'}>d</div>
                </td>
                <td className={'bg-opacity-50 bg-success'}>
                    <div className={'text-sm-end mt'}>e</div>
                </td>
                <td className={'bg-opacity-10 bg-success img white-castle'}>
                    <div className={'text-sm-end mt'}>f</div>
                </td>
                <td className={'bg-opacity-50 bg-success img white-king'}>
                    <div className={'text-sm-end mt'}>g</div>
                </td>
                <td className={'bg-opacity-10 bg-success   text-sm-end mt'}>
                    <div className={'text-sm-end mt'}>h</div>
                </td>
            </tr>
            </tbody>
        </Table>
    );
};

export {PlayField};