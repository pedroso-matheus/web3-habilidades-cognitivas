import Container from "@/components/Container";

import { companyName, gatawayPagamento, dataAtualizacao, linkSite, email, linkTermos } from "@/config/siteInfo"

export async function generateMetadata() {
  return {
    title: "Termos e Condições",    
  };
}

export default function termosCondicoes() {

    const siteName = companyName.toUpperCase();

    return (
      <div className="d-flex flex-column text-start justify-content-center custom-bg-color-dark-blue custom-color-light-blue p-5">        
          <Container>
            <h1 className="text-center">TERMOS E CONDIÇÕES</h1>
            <h2>DEFINIÇÕES</h2>
              <p>
                USUÁRIO: É caracterizado USUÁRIO toda e qualquer pessoa que acessar o domínio {linkSite} e suas ramificações, bem como for seguidor de nossos canais em mídias sociais.<br></br><br></br>
                USUÁRIO COMPRADOR: USUÁRIO cujo nome e CPF constam do pedido de compra aprovado apresentado no site do.
              </p>
            
            <h2>REGISTRO E USO DO SITE</h2>   

              <p>
                Ao acessar o site do {siteName} você concorda em não:<br></br><br></br>

                i: acessar nenhum dos serviços por algum meio (incluindo, sem limitações, o uso de scripts, web crawlers ou métodos semelhantes) que não sejam os disponíveis no site do {siteName}; e<br></br><br></br>

                ii: praticar algum tipo de atividade que possa interferir ou interromper os serviços ou a performance do site do {siteName}.<br></br><br></br>

                OS USÁRIOS MENORES DE 18 ANOS DE IDADE SOMENTE PODERÃO EFETUAR O REGISTRO OU CADASTRO NO SITE DESDE QUE DEVIDAMENTE REPRESENTADOS OU ASSISTIDOS, CONFORME PREVISTO NOS ARTS. 1.634 E 1.690 DO CÓDIGO CIVIL, POR SEUS REPRESENTANTES OU ASSISTENTES LEGAIS, DEVENDO ESSES SEREM RESPONSÁVEIS NA ESFERA CÍVEL POR TODO E QUALQUER ATO PRATICADO PELOS MENORES QUANDO DA UTILIZAÇÃO DESTE SITE.<br></br><br></br>

                OS REPRESENTANTES LEGAIS SERÃO RESPONSÁVEIS, POR TODO E QUALQUER ATO ILÍCITO OU CRIMINOSO PRATICADO PELOS MENORES QUANDO DA UTILIZAÇÃO DO SITE.<br></br><br></br>

                Você declara, para todos os fins de direito, ter plena capacidade para celebrar acordos ou, na ausência desta, autorização do responsável legal.<br></br><br></br>

                Você concorda em fazer transações com o {siteName} eletronicamente, incluindo sem limitações, concordar com o termo e condições impostas pelo {siteName}.<br></br><br></br>
                
                Você autoriza o {siteName} a enviar por e-mail ou por mensage de whatsapp termos e avisos importantes sobre o {siteName} e sobre as transações, ou adicionando essas informações no site do {siteName} ou na área de LOGIN.<br></br><br></br>
                
                É de sua responsabilidade manter suas informações de contato corretas e atualizadas e de manter um email válido cadastrado e de garantir que os e-mails que o {siteName} envia não estão sendo bloqueados ou filtrados como spam.<br></br><br></br>
                
                Se você não deseja mais fazer negócios com o {siteName} basta não acessar mais o site do {siteName} ou enviar um e-mail para {email}.<br></br>

              </p>

            <h2>DIREITOS DE PROPRIEDADE INTELECTUAL</h2>

              <p>
                Os elementos e/ou ferramentas encontrados no site do {siteName}, são de titularidade ou licenciados para o {siteName}, sujeitos aos direitos intelectuais de acordo com as leis brasileiras e tratados e convenções internacionais dos quais o Brasil seja signatário.<br></br><br></br> 
                
                Apenas a título exemplificativo, entendem-se como tais: cursos, palestras, treinamentos, workshops, ebooks, textos, softwares, scripts, imagens gráficas, fotos, sons, músicas, vídeos, recursos interativos e similares, marcas, marcas de serviços, logotipos e look and feel. <br></br><br></br>
                
                O {siteName} reserva a si todos os direitos que não foram expressamente previstos em relação ao sítio da Internet, aos seus elementos e/ou ferramentas. <br></br><br></br>
                
                O USUÁRIO compromete-se a não usar, reproduzir ou distribuir quaisquer elementos e/ou ferramentas que não sejam expressamente permitidos pelo {siteName}, inclusive o uso, reprodução ou distribuição para fins comerciais dos anúncios e/ou conteúdos extraídos do sítio da Internet. <br></br><br></br>
                
                Caso o USUÁRIO faça qualquer cópia, seja ela via download ou impressão, dos elementos e/ou ferramentas do {siteName} para uso exclusivamente pessoal, deverá preservar todos os direitos de propriedade intelectual inerentes. <br></br><br></br>
                
                O USUÁRIO concorda em não burlar, desativar ou, de alguma forma, interferir em recursos e/ou ferramentas relacionados à segurança do site do {siteName}, sob pena de incorrer nas medidas judiciais cabíveis.<br></br>
              </p>

            <h2>VIOLAÇÕES DOS TERMOS DE USO</h2>
              <p>
                O {siteName} poderá encerrar as contas de USUÁRIOS que violem ou sejam suspeitos pelo {siteName} ou pelos seus USUÁRIOS de violar os direitos de propriedade intelectual de terceiros ou outros direitos, assegurados pela legislação brasileira.<br></br>
              </p>

            <h2>RESPONSABILIDADE LIMITADA</h2>

              <p>
                Em hipótese alguma o {siteName} será responsável por quaisquer danos compensatórios, diretos, indiretos, acidentais, consequentes ou punitivos, perda de dados, de receitas ou lucros, perdas e danos à propriedade intelectual ou quaisquer reclamações que você ou terceiros possam ter com relação a transações regidas por esse acordo.<br></br>
              </p>

            <h2>LEI APLICÁVEL E FORO</h2>
              <p>
                Este acordo e os TERMOS nele contidos são regidos e interpretados de acordo com as leis brasileiras. Nenhum conflito de lei ou disposição de qualquer jurisdição será aplicado a esses termos e condições.<br></br>
              </p>

            <h2>RESPONSABILIDADE USUÁRIO COMPRADOR</h2>
              <p>
                O conteúdo dos cursos e eBooks são de uso exclusivo e pessoal do USUÁRIO COMPRADOR, cujo nome e CPF constam do pedido de compra aprovado apresentado, sendo vedada, por quaisquer meios e a qualquer título, a sua reprodução, cópia, divulgação e distribuição.<br></br><br></br>

                O USUÁRIO COMPRADOR compromete-se a conservar em segredo seu nome de USUÁRIO e sua senha de acesso à área restrita do site, não podendo fornecê-los a outro USUÁRIO, sob pena de, independentemente da comprovação de culpa ou dolo, ser penalizado com o cancelamento do seu acesso e consequente exclusão dos cursos e ebooks, ficando o {siteName} desobrigada de ressarcir quaisquer valores que porventura já tiverem sido pagos pelo USUÁRIO COMPRADOR.<br></br><br></br>

                É de exclusiva responsabilidade do USUÁRIO COMPRADOR (a) o cadastramento correto e atualizado dos seus dados pessoais e endereço no nosso site.<br></br>
              </p>

            <h2>CONDIÇÕES DE PAGAMENTO E REEMBOLSO</h2>
              <p>
                As transações comerciais sob as Formas de Pagamento apresentadas no site são intermediadas pelo {gatawayPagamento}.<br></br><br></br>

                O curso, treinamento, palestra, masterclass, workshop ou ebook será liberado para o devido acesso apenas após a confirmação do pagamento efetuado.<br></br><br></br>

                O comprador receberá um e-mail de confirmação do pagamento, e deverá comprometer-se a guardar o(s) comprovante(s) do(s) pagamento(s) efetuado(s) para a devida comprovação, caso haja alguma circunstância que impeça a liberação do produto ou serviço adquirido.<br></br><br></br>

                A forma de pagamento disponível são via cartão de crédito e pix.<br></br><br></br>

                O USUÁRIO poderá solicitar o reembolso em até 7 dias corridos.<br></br>
              </p>


            <h2>POLÍTICA DE PRIVACIDADE</h2>

              <p>
                Como parte integrante dos Termos e Condições do site {siteName}, este documento, denominado Política de Privacidade, tem por finalidade estabelecer as regras sobre a obtenção, uso e armazenamento dos dados e informações coletadas dos usuários, além do registro de suas atividades.
              </p>

            <h2> 1. DEFINIÇÕES:</h2>

              <p>
                1.1. Para fins desta Política de Privacidade, aplicam-se as seguintes definições:<br></br><br></br>

                Cookies: Arquivos enviados pelo servidor do site {siteName} para o computador dos usuários, com a finalidade de identificar o computador e obter dados de acesso, como páginas navegadas ou links clicados, permitindo, desta forma, personalizar a navegação dos usuários de acordo com o seu perfil.<br></br><br></br>

                Dados Anonimizados: Dados considerados sem a identificação de seu proprietário ou vinculação de quem se aponta. Dados sem rosto.<br></br><br></br>

                Dados Pessoais: Dados que dizem respeito à identificação de uma pessoa, compreendendo dados cadastrais e dados sensíveis.<br></br><br></br>

                Dados Sensíveis: Dados que possam discriminar o titular de alguma forma, seja pelo comportamento ou que diz respeito diretamente à personalidade, escolhas, gostos e preferências do indivíduo, a exemplo de convicção religiosa, política, filosófica, moral, da origem racial ou étnica, orientação sexual ou dados médicos, de saúde, genéticos ou biométricos.<br></br><br></br>

                IP: Abreviatura de Internet Protocol. É um conjunto de números que identifica o computador dos usuários na Internet.<br></br><br></br>

                Logs: Registros de atividades dos e usuários efetuadas no site {siteName}.<br></br><br></br>

                Site {siteName}: Designa o site de internet hospedado em {linkSite} e seus subdomínios.<br></br><br></br>

                Usuários: Pessoas que acessam ou interagem com as atividades oferecidas pelo site {siteName}.<br></br><br></br>

                Web beacons: Linhas de programação em páginas HTML que tem como finalidade obter detalhes da navegação do usuário, a exemplo de quanto tempo ficou com um site aberto, qual endereço visitado em seguida, dentre outros.<br></br>
              </p>

            <h2>2. OBTENÇÃO DOS DADOS E INFORMAÇÕES:</h2>
              <p>
                2.1. Os dados e informações serão obtidos quando os usuários interagirem com as diversas funcionalidades existentes no site {siteName}. São exemplos de interação quando fornecem informações voluntariamente dados de cadastro ou inserem dados sobre produtos, serviços e transações realizadas.<br></br>
              </p>

            <h2>3. ARMAZENAMENTO DOS DADOS E INFORMAÇÕES:</h2>
              <p>
                3.1. Todos os dados e informações coletados dos usuários serão incorporados ao banco de dados do site {siteName}.<br></br><br></br>

                3.2. Os dados e informações coletados estarão armazenados em ambiente seguro, observado o estado da técnica disponível, e somente poderão ser acessadas por pessoas qualificadas e autorizadas pela {siteName}.<br></br><br></br>

                3.3. Considerando que nenhum sistema de segurança é absolutamente seguro, a {siteName} se exime de quaisquer responsabilidades por eventuais danos e/ou prejuízos decorrentes de falhas, vírus ou invasões do banco de dados do site {siteName}, salvo nos casos comprovados de dolo ou culpa.<br></br>
              </p>

            <h2>4. USO DOS DADOS E INFORMAÇÕES:</h2>
              <p>
                4.1. Os dados e informações coletados dos usuários poderão ser utilizados para as seguintes finalidades:<br></br><br></br>

                Responder a eventuais dúvidas e solicitações dos usuários;<br></br><br></br>

                Cumprimento de ordem legal ou judicial;<br></br><br></br>

                Realizar operações em nome do usuário a partir de comandos executados na plataforma {siteName}, incluindo a divulgação a terceiro sempre que indispensável, por exemplo, emitir uma Nota fiscal com seu certificado digital;<br></br><br></br>

                Para garantir a sua segurança no uso do {siteName} e para segurança de todos os usuários;<br></br><br></br>

                Constituir, defender ou exercer regularmente direitos em âmbito judicial ou administrativo;<br></br><br></br>

                Elaborar estatísticas gerais, para identificação do perfil dos usuários e desenvolvimento de campanhas do {siteName}, mas sem realizar identificação pessoal. Terceiros poderão efetuar o registro das informações e o agrupamento dos dados;<br></br><br></br>

                Determinação de tendências de comércio e necessidades de fornecedores e consumidores por produtos ou serviços;<br></br><br></br>

                Manter atualizados os cadastros dos usuários para fins de contato por telefone, correio eletrônico, SMS, mala direta ou por outros meios de comunicação; Informar a respeito de novidades, promoções e eventos do {siteName}, especialmente do {siteName};<br></br><br></br>

                Aumentar a visibilidade das campanhas de arrecadação de fundos e projetos ativos no site {siteName};<br></br><br></br>

                Proporcionar melhorias no conteúdo e serviços prestados.<br></br><br></br>
                
                4.2. A base de dados formada pela {siteName} através da coleta dos dados do site {siteName} não será compartilhada, vendida, cedida, transferida, informada ou alugada a terceiros.<br></br><br></br>

                4.2.1. Em casos específicos, algumas informações anonimizadas poderão ser compartilhadas com parceiros comerciais, em especial, nas ações de marketing com participação relevante do {siteName}.<br></br><br></br>

                4.2.2. Sempre que necessário para a total execução de serviços contratados, a {siteName} poderá fornecer informações anonimizadas ou dados de seus usuários aos contratados correspondentes, tomando as medidas legais e técnicas de modo a tornar o fornecimento de dados ou informações tão seguro quanto possível.<br></br><br></br>

                4.2.3. A {siteName} não é responsável pelo mau uso que parceiros comerciais ou contratados fizerem das informações fornecidas, pois está fora de sua esfera de vigilância e controle.<br></br><br></br>
                
                4.3. Dados adquiridos somente poderão ser acessados por profissionais devidamente autorizados pela {siteName}, respeitando a necessidade a que serão submetidos, a relevância para os objetivos do site {siteName} e aos interesses dos usuários, além de preservar a privacidade dos mesmos.<br></br><br></br>

                4.4. Caso o usuário deixe de utilizar os serviços oferecidos pelo site {siteName}, a {siteName} poderá, para fins de auditoria e preservação de direitos, permanecer com o registro de dados e informações do usuário, pelo período máximo de 5 (cinco) anos, com a faculdade de excluí-los definitivamente segundo sua conveniência.<br></br><br></br>

                4.5. O usuário poderá exigir do {siteName} os dados que estão registrados que lhe dizem respeito, da mesma forma que poderá solicitar a alteração ou exclusão dos mesmos. Para isso, deve entrar em contato através dos meios disponibilizados pelo site {siteName}, caso não ofereça a funcionalidade correspondente.<br></br><br></br>

                4.6. A {siteName} somente divulgará as informações ou dados pessoais, caso exista consentimento expresso do usuário, quando houver determinação legal ou judicial.<br></br>
              </p>

            <h2>5. REGISTRO DE ATIVIDADES</h2>
              <p>
                5.1. A {siteName} registrará todas as atividades efetuadas pelos usuários no site {siteName}, por meio de logs, incluindo:<br></br><br></br>

                IP dos usuários;<br></br><br></br>

                Ações realizadas pelos usuários no site {siteName};<br></br><br></br>

                Páginas acessadas;<br></br><br></br>

                Datas e horários de toda as ações e acesso a cada página do site {siteName};<br></br><br></br>

                Informações sobre o dispositivo utilizado, versão de sistema operacional, navegador, dentre outros aplicativos instalados;<br></br><br></br>

                Session ID (quando disponível).<br></br><br></br>

                5.2. Os registros mencionados no item 5.1 poderão ser utilizados pela {siteName} em casos de investigação de fraudes ou de alterações indevidas em seus sistemas e cadastros.<br></br>
              </p>

            <h2>6. COOKIES E OUTRAS TECNOLOGIAS DE OBTENÇÃO DE DADOS</h2>
              <p>
                6.1. O site {siteName} poderá fazer o uso de cookies, cabendo aos usuários configurarem o seu navegador de Internet, caso deseje bloqueá-los. Nesta hipótese, algumas funcionalidades do Site {siteName} poderão ser limitadas.<br></br><br></br>

                6.2. O site também poderá utilizar web beacons para coletar dados de comportamento dos usuários das páginas, onde a instalação de arquivos nos equipamentos não é necessária.<br></br><br></br>

                6.3. Outras tecnologias poderão ser utilizadas para a obtenção de dados de navegação pelo usuário, no entanto, os termos desta política e as opções do usuário a respeito de sua coleta e armazenamento serão respeitados.<br></br>
              </p>

            <h2>7. DISPOSIÇÕES GERAIS</h2>
              <p>
                7.1. As disposições constantes desta Política de Privacidade poderão ser atualizadas ou modificadas a qualquer momento, cabendo aos usuários verificá-la sempre que acessar o site {siteName}. Navegar ou interagir com o Site {siteName} após atualizações/modificações será interpretado como uma concordância tácita às novas regras aplicadas.<br></br>
              </p>

            <h2>PARAGRAFO ÚNICO</h2>
              <p>
                Os Usuários poderão enviar sugestões ou críticas a respeito de qualquer material exposto ou em relação à plataforma ao {siteName}, através do email {email}, bem como denunciar modelos ou produtos que considerem ofensivos ou que infrinjam algum direito autoral.

                Se você possui qualquer questão, dúvidas, sugestões em relação aos termos do acordo acima, por favor, sinta-se à vontade para enviar um e-mail para {email}.<br></br>
              </p>

            <p>Data ultima atualização: {dataAtualizacao}</p>
        </Container>          
    </div>
  );
} 