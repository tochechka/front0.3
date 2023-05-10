import React from 'react';

const Table = () => {
    return (
        <div style={{pageBreakAfter: "avoid", pageBreakBefore: 'avoid', pageBreakInside: 'avoid'}}>
            <table style={{height: '30%'}}>
                <tr>
                    <td colSpan="4" rowSpan="3"></td>
                    <td rowSpan="3">Код стр</td>
                    <td rowSpan="3" className='vertical'>
                        <p className='vertical margin-big'>Количество осмотров мест <br/> происшестпровий с изъятием <br/> следов и объектов</p></td>
                    <td colSpan="12">в том числе</td>
                </tr>
                <tr>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>дактилоскопических</p></td>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>трасологических</p></td>
                    <td colSpan="3">из них</td>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>баллистических</p></td>
                    <td>из них</td>
                    <td rowSpan="2">КЭМВИ</td>
                    <td>из них</td>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>взрывотехнических</p></td>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>пожарно-технических</p></td>
                    <td rowSpan="2" className='vertical'><p className='vertical margin-span'>тканей и выделений</p></td>
                </tr>
                <tr>
                    <td className='vertical'><p className='vertical margin-nospan'>следов подошв <br/> обуви</p></td>
                    <td className='vertical'><p className='vertical margin-nospan'>следов орудий <br/> взлома</p></td>
                    <td className='vertical'><p className='vertical margin-nospan'>прочих объектов <br/> трасологических <br/> исследований</p></td>
                    <td className='vertical'><p className='vertical margin-nospan'>пуль, гильз</p></td>
                    <td className='vertical'><p className='vertical margin-nospan'>наркотических <br/> средств</p></td>
                </tr>
                <tr>
                    <td colSpan="4">А</td>
                    <td>Б</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td colSpan="4">Всего</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td rowSpan="19" className='vertical'><p className='vertical margin-xxl'>В том числе по преступлениям</p></td>
                    <td colSpan="3">против жизни и здоровья (гл.16,17 УК РФ)</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td rowSpan="2">из них</td>
                    <td colSpan="2">убийство (ст.105,106,107 УК РФ)</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td colSpan="2">умышленное причинение тяжкого вреда здоровью (ст.111 УК РФ)
                    </td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td colSpan="3">против половой неприкосновенности и половой свободы личности
                        (гл. 18
                        УК РФ)
                    </td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>из них</td>
                    <td colSpan="2">изнасилование (ст.131 УК РФ)</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td colSpan="3">против собственности (гл. 21 УК РФ)</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td rowSpan="8">из них</td>
                    <td colSpan="2">кражи (без учета краж автомототранспорта)</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td colSpan="2">с проникновением ч. 2,3,4 ст. 158 УК РФ</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>из них</td>
                    <td>из квартир</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td colSpan="2">грабежи</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td colSpan="2">п. "в" ч. 2 ст. 161 УК РФ</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td colSpan="2">разбои</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td colSpan="2">ч. 3 ст. 162 УК РФ</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td colSpan="2">кражи автомототраспорта, неправомерное завладение транспортным
                        средством без цели хищения (ч.2,3,4 ст.158, ст.166 УК РФ)
                    </td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td colSpan="3">связанные с изготовлением или сбытом поддельных денег и ценных
                        бумаг,
                        кредитых либо расчетных карт и иных платежных документов (ст. 186, 187 УК РФ)
                    </td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td colSpan="3">против общественной безопасности и общественного порядка
                        (раздел IX УК
                        РФ)
                    </td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td rowSpan="3">из них</td>
                    <td colSpan="2">связанные с незаконным оборотом оружия (ст.ст. 222,2221,223,
                        2231 УК
                        РФ)
                    </td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td colSpan="2">нарушение правил дорожного движения и эксплуатации
                        транспортных
                        средств (ст.264 УК РФ)
                    </td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td colSpan="2">незаконным оборотом наркотических средств, психотропных
                        веществ и их
                        аналогов (ст. 228-232 УК РФ)
                    </td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                </tr>
            </table>
        </div>
    );
};

export default Table;