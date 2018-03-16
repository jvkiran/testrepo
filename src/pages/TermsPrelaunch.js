import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../sections/Header'
import { fonts, colors } from '../styles'

const StyledSection = styled(Section)`
    ${ContentRow} { /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${SubTitle} { /* stylelint-disable-line */
        margin-bottom: 3rem;
    }

    h1 {
        font-size: ${fonts.size.h2};
    }

    h2 {
        font-size: ${fonts.size.h4};
    }
`

const Line = styled.div`
    border-top: 2px solid rgba(${colors.lightGrey}, .5);
    margin-bottom: 2rem;
    margin-top: 2rem;
`

const Meta = () => (
    <Helmet>
        <meta content="noindex,nofollow" name="robots" />
    </Helmet>
)

const TermsPrelaunch = () => (
    <Fragment>
        <Meta />
        <Header />
        <StyledSection>
            <ContentRow>
                <Title>Terms Pre-Launch</Title>
                <SubTitle>Terms and Conditions for Whitelisting for participating in the Public Pre-Launch Token Exchange and the Network Launch Token Exchange of Ocean Protocol Foundation Ltd.</SubTitle>

                <Line />

                <h5>Content</h5>
                <ul>
                    <li><a href="#terms">Terms & Conditions</a></li>
                    <li><a href="#data-protection">Data Protection</a></li>
                    <li><a href="#privacy-policy-eu">Privacy Policy EU</a></li>
                    <li><a href="#marketing-consent">Marketing Consent</a></li>
                </ul>

                <Line />

                <p id="terms">Ocean Protocol Foundation Ltd. (Company Registration No.: 201729912W), a company incorporated in Singapore with its registered office at 20 Pasir Panjang Road, #03-22 Mapletree Business City, Singapore 117439 (the “<strong>Foundation</strong>”) is proposing to create and distribute cryptographic tokens – the Ocean tokens (the “<strong>Tokens</strong>”) – to the general public in exchange for cryptocurrency during the public Pre-Launch phase (“<strong>Pre-Launch Token Exchange</strong>”) and the Network Launch phase (“<strong>Network Launch Token Exchange</strong>” and together with the Pre-Launch Token Exchange, the “<strong>Initial Token Exchange</strong>”), the launch periods to be announced by the Foundation on its website at <a href="https://oceanprotocol.com/">https://oceanprotocol.com</a> (the “<strong>Website</strong>”) as well as other Channels (as defined below) which the Foundation may elect. The Tokens are to function as the native cryptographic currency for use on the Ocean Protocol network (the “<strong>Project</strong>”) – ​a decentralised data exchange platform built on blockchain technology to be developed by Company in collaboration with BigchainDB GmbH (German Company Registration Number HRB 160856B) and DEX Pte. Ltd. (Singapore Company Registration Number 201541022W).</p>

                <p>Via the Website and in preparation of the Initial Token Exchange, the Foundation is embarking on registration of, and compilation of a listing (“<strong>Whitelist</strong>”) of, persons / body corporate (“<strong>Whitelist Registrant</strong>”) interested to acquire Tokens by way of participation in the Initial Token Exchange (“<strong>Whitelisting</strong>”). </p>

                <p>The Whitelisting will be on and subject to the following terms and conditions (as may be amended, modified or supplemented from time to time) (these “<strong>Terms</strong>”). </p>

                <p><strong>For the avoidance of doubt, these Terms govern only the Whitelisting, and DO NOT govern a Whitelist Registrant’s participation in the Initial Token Exchange, which participation shall be the subject of separate terms and conditions (“Initial Token Exchange Terms”) to be entered into between the Foundation and Whitelist Registrant at a future date.</strong> </p>

                <p><strong>Only Whitelist Registrants who are registered on the Whitelist and who fulfil the Initial Token Exchange Terms, will be eligible to participate in the Initial Token Exchange.</strong></p>

                <p>You have received these Terms in your capacity as a Whitelist Registrant. Each of you and the Foundation shall hereinafter be referred to as a “<strong>Party</strong>”, and collectively, you and the Foundation shall hereinafter be referred to as the “<strong>Parties</strong>”. </p>

                <p>Please read the Terms set out herein carefully before using the Website as they affect your obligations and legal rights, including, but not limited to, waivers of rights and limitations of liability. These Terms constitute the entire agreement between the parties with respect to your application for registration on the Whitelist (your “Registration” or, as the context requires, “Register” or “Registering”). These Terms supersede and terminate all previous undertakings, representations and agreements between the Parties with respect to your Registration.</p>

                <p><strong>IF YOU INTEND TO REGISTER, BY ACCESSING THE WEBSITE, YOU AGREE AND ACKNOWLEDGE, AND WILL BE DEEMED AS HAVING ACCEPTED UNCONDITIONALLY AND WITHOUT RESERVATION ALL OF THESE TERMS. IF YOU DO NOT AGREE WITH OR ACCEPT THESE TERMS, YOU SHALL NOT CONTINUE TO USE THE WEBSITE OR PROCEED WITH YOUR REGISTRATION.</strong></p>

                <p><strong>THE TOKENS ARE NOT INTENDED TO CONSTITUTE SECURITIES OF ANY FORM, UNITS IN A BUSINESS TRUST, UNITS IN A COLLECTIVE INVESTMENT SCHEME OR ANY OTHER FORM OF INVESTMENT IN ANY JURISDICTION. THIS DOCUMENT AND THESE TERMS DO NOT CONSTITUTE A PROSPECTUS OR OFFER DOCUMENT OF ANY SORT AND ARE NOT INTENDED TO CONSTITUTE AN OFFER OF SECURITIES OF ANY FORM, UNITS IN A BUSINESS TRUST, UNITS IN A COLLECTIVE INVESTMENT SCHEME OR ANY OTHER FORM OF INVESTMENT, OR A SOLICITATION FOR ANY FORM OF INVESTMENT IN ANY JURISDICTION. NO REGULATORY AUTHORITY HAS EXAMINED OR APPROVED OF THESE TERMS. NO SUCH ACTION HAS BEEN OR WILL BE TAKEN BY THE FOUNDATION UNDER THE LAWS, REGULATORY REQUIREMENTS OR RULES OF ANY JURISDICTION. THE PROVISION OF THESE TERMS TO YOU DOES NOT IMPLY THAT THE APPLICABLE LAWS, REGULATORY REQUIREMENTS OR RULES HAVE BEEN COMPLIED WITH.</strong></p>

                <p><strong>BY ACCEPTING THESE TERMS AND PROCEEDING WITH THE REGISTRATION, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS AND YOU EXPRESSLY ACKNOWLEDGE AND REPRESENT THAT YOU HAVE CAREFULLY REVIEWED THESE TERMS AND FULLY UNDERSTAND THE RISKS, COSTS, AND BENEFITS OF YOUR REGISTRATION. IF YOU ARE IN ANY DOUBT AS TO THE ACTION YOU SHOULD TAKE, YOU SHOULD CONSULT YOUR LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S). IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT PROCEED WITH THE REGISTRATION.</strong></p>

                <p>These Terms are subject to amendments, modifications or supplements from the date hereof until the cessation of the Whitelisting without notice, from time to time in the Foundation’s sole and absolute discretion. The Foundation will announce any amendments, modifications or supplements to these Terms on the Website, and you agree that the Foundation has the absolute right in its sole discretion to effect such amendments, modifications or supplements to the Terms. By accessing the Website after such amendments, modifications or supplements have been announced, you are deemed to have agreed to the Terms as amended, modified or supplemented.</p>

                <p>The headings in these Terms are included for convenience only and shall not be taken into account in construing these Terms. Unless the context otherwise requires, words (including words defined herein) denoting the singular only shall include the plural and vice versa. References to “Paragraphs” are to be construed as references to the paragraphs of these Terms. </p>

                <p>The Parties <strong>HEREBY AGREE</strong> as follows:</p>

                <h2>1. INTRODUCTION, SCOPE OF TERMS AND DEFINITIONS</h2>

                <p>1.1 These Terms govern your Registration.</p>

                <p>1.2 Unless otherwise stated herein or the context otherwise requires, the following words and expressions have the following meanings:
“<strong>Affiliate</strong>” means in relation to any person, any Subsidiary or Ultimate Holding Company of that person and any other Subsidiary of that Ultimate Holding Company;
                </p>

                <p>“<strong>Subsidiary</strong>” is a corporation that has (a) the composition of its board of directors controlled by another corporation; (b) has more than half of its voting power controlled by another corporation; or (c) has more than half of its issued share capital held by another corporation; </p>

                <p>“<strong>Ultimate Holding Company</strong>” means a corporation that has another corporation as its Subsidiary and is not itself a Subsidiary of any corporation; and</p>

                <p>“<strong>Whitepaper</strong>” means one or more documents (whether or not entitled “<strong>Whitepaper</strong>”), as may be released and amended from time to time at the Foundation’s sole discretion, explaining, among other things, the Project and its technology, the Foundation’s business and the Tokens, and including, but not limited to, the Initial Token Exchange and information about relevant Foundation personnel.</p>

                <p>1.3 No information contained in or on, and no part of the following:</p>

                <p>(a) the finalised, published and adopted version or draft of the Whitepaper, the business version of the Whitepaper, the technical primer, the marketplace framework document or any other documents uploaded on the Website, the Foundation’s Telegram channel which is accessible on <a href="https://t.me/oceanprotocol">t.me/oceanprotocol</a>, the Foundation’s blog which is accessible on <a href="https://blog.oceanprotocol.com/">blog.oceanprotocol.com</a> and/or the Foundation’s Twitter account (@oceanprotocol) (collectively, the “Channels”); </p>

                <p>(b) the Channels;</p>

                <p>(c) any website or other social media channels directly or indirectly linked to the Whitepaper or the Channels; or</p>

                <p>(d) any other information or document, </p>

                <p>shall constitute part of these Terms, and no representations, warranties or undertakings are or are intended or purported to be given by any of the Foundation or its Affiliates in respect of any information contained in or on, or any part of, the items as stated in this Paragraph 1.3.</p>

                <h2>2. REGISTRATION AND WHITELISTING</h2>

                <p>2.1 Your Registration is governed by these Terms. If you do not accept these Terms, you shall not Register and shall not be eligible to participate in the Initial Token Exchange. </p>

                <p>2.2 You shall not Register if there are applicable legal restrictions in your country of residence or domicile. It is your sole responsibility to ensure that your Registration is not prohibited, restricted, curtailed, hindered, impaired or otherwise adversely affected by any applicable law, regulation or rule in your country of residence or domicile.</p>

                <p>2.3 As part of its Whitelisting and verification procedures, the Foundation may require you to furnish such documents and information so as to prove your identity, status and/or eligibility to Register. The Foundation reserves the right, in its sole and absolute discretion, to reject your Registration if you are unable to furnish such documents or information to the Foundation’s sole and absolute satisfaction.</p>

                <p>2.4 Upon your successful Registration to the Foundation’s satisfaction in its sole and absolute discretion, you shall be notified of admission to the Whitelist and subject to you fulfilling the Initial Token Exchange Terms, shall be eligible to participate in the Initial Token Exchange.</p>

                <h2>3. REPRESENTATIONS AND WARRANTIES</h2>

                <p>3.1 By accepting these Terms and Registering, you represent and warrant to the Foundation as follows:</p>

                <p>(a) you have read and understood all of these Terms;</p>

                <p>(b) you have full power and capacity to accept these Terms and perform all your obligations hereunder and in the case where you are accepting these Terms on behalf of a corporation:</p>

                <p>(b.i) such corporation is duly incorporated and validly existing under the applicable laws; and </p>

                <p>(b.ii) you are duly authorised to accept these Terms and procure the performance of obligations hereunder;</p>

                <p>(c) these Terms constitute legal, valid and binding obligations on you, enforceable in accordance with its terms and your Registration is not in breach or contravention of any applicable law, regulation or rule in your jurisdiction;</p>

                <p>(d) you agree and acknowledge that your Registration or admission to the Whitelist does not guarantee your eligibility to participate in the Initial Token Exchange which is subject to and governed by the Initial Token Exchange Terms;</p>

                <p>(e) you agree and acknowledge that the Tokens do not constitute securities of any form, units in a business trust, units in a collective investment scheme or any other form of investment in any jurisdiction;</p>

                <p>(f) you are not a citizen or resident of any jurisdiction the laws of which prohibit, restrict, curtail, hinder, impair, conflict or otherwise adversely affect your Registration;</p>

                <p>(g) you acknowledge and understand that no Token should be construed, interpreted, classified or treated as enabling, or according any opportunity to, tokenholders to participate in or receive profits, income, or other payments or returns arising from or in connection with the Project, the Tokens or the proceeds of the Initial Token Exchange, or to receive sums paid out of such profits, income, or other payments or returns;</p>

                <p>(h) you agree and acknowledge that no regulatory authority has examined or approved of these Terms, no action has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction and the publication, distribution or provision of these Terms to you does not imply that the applicable laws, regulatory requirements or rules have been complied with;</p>

                <p>(i) the provision of these Terms, any part thereof or any copy thereof, or acceptance of the same by you, is not prohibited or restricted by the applicable laws, regulations or rules in your jurisdiction, and where any restrictions in relation to possession are applicable, you have observed and complied with all such restrictions at your own expense and without liability to the Foundation;</p>

                <p>(j) you agree and acknowledge that the Tokens are not to be construed, interpreted, classified or treated as:</p>

                <p>(j.i) any kind of currency other than cryptocurrency;</p>

                <p>(j.ii) debentures, stocks or shares issued by any person or entity;</p>

                <p>(j.iii) rights, options or derivatives in respect of such debentures, stocks or shares;</p>

                <p>(j.iv) rights under a contract for differences or under any other contract the purpose or pretended purpose of which is to secure a profit or avoid a loss;</p>

                <p>(j.v) units in a collective investment scheme;</p>

                <p>(j.vi) units in a business trust;</p>

                <p>(j.vii) derivatives of units in a business trust; or</p>

                <p>(j.viii) any form of investment; </p>

                <p>(k) you are legally permitted to Register and undertake all actions contemplated or associated with such Registration;</p>

                <p>(l) you are (and in the case where you are accepting these Terms on behalf of a corporation, such corporation is) Registering as principal and for your own benefit and you are not acting on the instructions of, or as nominee or agent for or on behalf of any other person;</p>

                <p>(m) no consent, approval, order or authorisation of, or registration, qualification, designation, declaration or filing with, any regulatory authority in any jurisdiction ( “Approvals”) is required on your part in connection with your Registration or, where any Approvals are required, such Approvals have been obtained and remain valid and in full force and effect;</p>

                <p>(n) if you are: (i) a natural person, you are of sufficient age and capacity under the applicable laws of the jurisdiction in which you reside and the jurisdiction of which you are a citizen to Register; or (ii) a body corporate, you are legally established and validly existing under the applicable laws of the jurisdiction in which you are incorporated with sufficient legal capacity to Register;</p>

                <p>(o) you are not Registering with a view to obtaining or using Tokens for any illegal purpose;</p>

                <p>(p) none of you or (and in the case where you are accepting these Terms on behalf of a corporation) any of your Subsidiaries (if any), any of your directors or officers nor, any of your employees, agents or any other person acting on behalf of your or any of your Subsidiaries is an individual or entity that is, or is owned or controlled by an individual or entity that:</p>

                <p>(p.i) is listed by the Monetary Authority of Singapore (“MAS”) as designated individuals or entities defined in the respective regulations promulgated under the Monetary Authority of Singapore Act (Chapter 186) of Singapore, the United Nations Act (Chapter 339) of Singapore or the Terrorism (Suppression of Financing) Act (Chapter 325) of Singapore or such other law, regulation or rule as may be prescribed by the MAS from time to time;</p>

                <p>(p.ii) is currently the subject of any sanction administered by the United States Office of Foreign Assets Control of the United States Department of the Treasury (&quot;OFAC&quot;) or any other United States government authority, is not designated as a &quot;Specially Designated National&quot; or &quot;Blocked Person&quot; by OFAC or subject to any similar sanctions or measures imposed or administered by the United Nations Security Council, the European Union, Her Majesty’s Treasury of the United Kingdom or similar sanctions administered or imposed by the government of Singapore or any other country (collectively, the &quot;Sanctions&quot;);</p>

                <p>(p.iii) is located, organised or resident in a country or territory that is the subject of such Sanctions (including, without limitation, the Democratic People’s Republic of Korea, the Democratic Republic of Congo, Eritea, Iran, Libya, Somalia, South Sudan, Sudan and Yemen); or</p>

                <p>(p.iv) has engaged in and is not now engaged in any dealings or transactions with any government, person, entity or project targeted by, or located in any country or territory, that at the time of the dealing or transaction is or was the subject of any Sanctions; </p>

                <p>(q) (in the case where you are accepting these Terms on behalf of a corporation) the operations of you and any of your Subsidiaries, are and have been conducted at all times in compliance with applicable financial record keeping and reporting requirements and money laundering statutes in Singapore and of all jurisdictions in which you and your Subsidiaries conduct business or operations, the rules and regulations thereunder and any related or similar rules, regulations or guidelines, issued, administered or enforced by any governmental agency or proceeding by or before any court or governmental agency (collectively, &quot;Money Laundering Laws&quot;) and no action, suit or proceeding by or before any court or governmental agency, authority or body or any arbitrator involving you or your Subsidiaries with respect to Money Laundering Laws is pending and, no such actions, suits or proceedings are threatened or contemplated against you or your Subsidiaries;</p>

                <p>(r) none of: (i) you; (ii) any person controlling or controlled by you; (iii) if you are a privately-held entity, any person having a beneficial interest in you; or (iv) any person for whom you are acting as agent or nominee in connection with your Registration, is a senior foreign political figure, or any immediate family member or close associate of a senior foreign political figure, as such terms are defined below;</p>

                <p>A “<strong>senior foreign political figure</strong>” is defined as a senior official in the executive, legislative, administrative, military or judicial branch of a government (whether elected or not), a senior official of a major political party, or a senior executive of a foreign government-owned corporation. In addition, a “<strong>senior foreign political figure</strong>” includes any corporation, business or other entity that has been formed by, or for the benefit of, a senior foreign political figure. “<strong>Immediate family</strong>” of a senior foreign political figure typically includes such figure’s parents, siblings, spouse, children and in-laws. A “<strong>close associate</strong>” of a senior foreign political figure is a person who is widely and publicly known to maintain an unusually close relationship with such senior foreign political figure, and includes a person who is in a position to conduct substantial domestic and international financial transactions on behalf of such senior foreign political figure.</p>

                <p>(s) if you are affiliated with a non-U.S. banking institution (a “<strong>Foreign Bank</strong>”), or if you receive deposits from, make payments on behalf of, or handle other financial transactions related to a Foreign Bank, you represent and warrant to the Foundation that: (i) the Foreign Bank has a fixed address, and not solely an electronic address, in a country in which the Foreign Bank is authorised to conduct banking activities; (ii) the Foreign Bank maintains operating records related to its banking activities; (iii) the Foreign Bank is subject to inspection by the banking authority that licensed the Foreign Bank to conduct its banking activities; and (iv) the Foreign Bank does not provide banking services to any other Foreign Bank that does not have a physical presence in any country and that is not a regulated affiliate;</p>

                <p>(t) you have a basic degree of understanding of the operation, functionality, usage, storage, transmission mechanisms and other material characteristics of cryptocurrencies, blockchain-based software systems, cryptocurrency wallets or other related token storage mechanisms, blockchain technology and smart contract technology;</p>

                <p>(u) you bear the sole responsibility to determine what tax implications (if any) your Registration may have for you, and agree not to hold the Foundation or any other person involved in the Whitelisting liable for any tax liability associated with or arising therefrom;</p>

                <p>(v) you agree and acknowledge that the Foundation is not liable for any direct, indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any acceptance of or reliance on these Terms or any part thereof by you; </p>

                <p>(w) you waive the right to participate in a class action lawsuit or a class wide arbitration against the Foundation and/or any person involved in the Whitelisting; and</p>

                <p>(x) all of the above representations and warranties are true, complete, accurate and not misleading from the time of your access to and/or acceptance of these Terms.</p>

                <p>3.2 None of the Foundation and its Affiliates makes or purports to make, and each of the Foundation and its Affiliates hereby disclaims, any representation or warranty in any form whatsoever, including any representation or warranty in relation to:</p>

                <p>(a) the information set out on the Whitepaper, the Channels or any other place;</p>

                <p>(b) any Affiliate;</p>

                <p>(c) the Whitelisting; and</p>

                <p>(d) your Registration.</p>

                <h2>4. DISCLAIMERS</h2>

                <p>4.1 To the maximum extent permitted by all applicable laws, regulations and rules and except as otherwise provided in these Terms, each of the Foundation and its Affiliates hereby expressly disclaims its liability and shall in no case be liable to you or any person for:</p>

                <p>(a) abortion of the Initial Token Exchange pursuant to Paragraph 4.4;</p>

                <p>(b) failure, malfunction or breakdown of, or disruption to, the operations of the Foundation or any technology (including but not limited to smart contract technology) on which any of the Foundation, the Whitelisting or your Registration relies on, due to occurrences of hacks, mining attacks (including but not limited to double-spend attacks, majority mining power attacks and “selfish-mining” attacks), cyber-attacks, distributed denials of service, errors, vulnerabilities, defects, flaws in programming or source code or otherwise, regardless of when such failure, malfunction, breakdown, or disruption occurs;</p>

                <p>(c) any virus, error, bug, flaw, defect or otherwise adversely affecting the Whitelisting or your Registration; </p>

                <p>(d) failure to disclose information relating to the progress of the Whitelisting or your Registration;</p>

                <p>(e) any prohibition, restriction or regulation by any government or regulatory authority in any jurisdiction of the Whitelisting or your Registration;</p>

                <p>(f) any risks associated with your Registration, the Whitelisting, the Whitepaper, the Channels, the Foundation and its Affiliates; and</p>

                <p>(g) all other risks, direct, indirect or ancillary, whether in relation to your Registration, the Whitelisting, the Whitepaper, the Channels, or the Foundation and/or its Affiliates which are not specifically or explicitly contained in or stated in these Terms.</p>

                <p>4.2 The Foundation reserves the right, in its sole and absolute discretion, to adopt organisational, technical or other measures to ensure that the Whitelisting be unavailable to certain persons that it may determine are ineligible to Register and hence ineligible to participate in the Initial Token Exchange, and none of the Foundation and its Affiliates shall be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any consequences of such prohibition.</p>

                <p>4.3 Notwithstanding your acceptance of these Terms or anything to the contrary herein, the Foundation reserves the right, for any reason whatsoever (without having to account for such reason(s)) and in its sole and absolute discretion, to reject your Registration and none of the Foundation and its Affiliates shall be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any consequences of such rejection.</p>

                <p>4.4 The Foundation reserves the right, in its sole and absolute discretion, to abort your Registration, the Whitelisting and/or Initial Token Exchange at any time after your acceptance of these Terms. In the event of such abortion of your Registration, the Whitelisting and/or Initial Token Exchange, you acknowledge and agree that none of the Foundation and its Affiliates shall have any obligation in any form or manner whatsoever to you, and none of the Foundation and its Affiliates shall be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any consequences of such abortion.</p>

                <h2>5. LIMITATION OF LIABILITY AND INDEMNIFICATION</h2>

                <p>5.1 To the maximum extent permitted by the applicable laws, regulations and rules:</p>

                <p>(a) none of the Foundation and/or its Affiliates shall be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with your Registration or the Whitelisting; and</p>

                <p>(b) you hereby agree to waive all rights to assert any claims against the Foundation and/or its Affiliates under such applicable laws, regulations and rules.</p>

                <p>5.2 To the maximum extent permitted by the applicable laws, regulations and rules, you shall indemnify, defend, and hold each of the Foundation, its Affiliates and/or (as the case may be) their respective Subsidiaries, related companies, affiliates, directors, officers, employees, agents, successors, and permitted assignees (“Indemnified Persons”) harmless from and against any and all claims, damages, losses, suits, actions, demands, proceedings, expenses, and/or liabilities (including but not limited to reasonable legal fees incurred and/or those necessary to successfully establish the right to indemnification) filed/incurred by any third party against any of the Indemnified Persons arising out of a breach by you of any warranty, representation, or obligation hereunder.</p>

                <h2>6. NO ASSIGNMENT</h2>

                <p>The Foundation may, at its sole and absolute discretion, assign its rights and/or delegate its duties under these Terms. You may not assign your rights or delegate your duties, and any assignment or delegation without the written consent of the Foundation, which the Foundation may withhold at its sole and absolute discretion, shall be void. Subject to these Terms, only you and no other person shall have the right to any claim against the Foundation and/or its Affiliates in connection with your purchase hereunder. You shall not assign, trade or transfer, or attempt to assign, trade or transfer, your right to any such claim. Any such assignment or transfer shall not impose any obligation or liability of the Foundation and/or its Affiliates to the assignee or transferee. </p>

                <h2>7. INTELLECTUAL PROPERTY RIGHTS</h2>

                <p>7.1 These Terms shall not entitle you to any intellectual property rights, including the rights in relation to the use, for any purpose, of any information, image, user interface, logos, trademarks, trade names, Internet domain names or copyright in connection with the Whitelisting, the Whitepaper, the Channels, the Foundation and its Affiliates, the Initial Token Exchange, the Tokens and the Project.</p>

                <p>7.2 There are no implied licences under these Terms, and any rights not expressly granted to you hereunder are reserved by the Foundation.</p>

                <h2>8. INTELLECTUAL PROPERTY RIGHTS</h2>

                <p>8.1 The pages of the Channels may contain links to third-party websites and services which are owned and operated by third parties (“<strong>Third Party Online Products and Service(s)</strong>”). These links are provided for your information and convenience only, and are NOT an endorsement by the Foundation and/or its Affiliates, their respective directors, officers, employees, agents, successors, and permitted assignees of the contents of such linked websites or third parties, over which none of the aforementioned entities have any control over. Your access to and use of any Third Party Online Products and Service is governed by the terms, conditions, disclaimers and notices found on each such website or in connection with such services. The Foundation has not verified, will not, and is under no obligation to verify the accuracy, suitability or completeness of the contents on such Third Party Online Products and Services, and the Foundation does not control, endorse, warrant, promote, recommend or in any way assumes responsibility or liability for any services or products that may be offered by or accessed through such Third Party Online Products and Services or the operators of them, or the suitability or quality of any of such Third Party Online Products and Services. In addition, the Foundation does not warrant that such Third Party Online Products and Services or the software, data or files contained in, accessed via or linked or referred to in, such Third Party Online Products and Services are free of viruses (or other deleterious data or programs) or defects or that use of such Third Party Online Products and Services will not cause harm or that they conform or will conform with any user expectations. Furthermore, the Foundation is not responsible for maintaining any materials referenced from another website, and makes no warranties for that website or service in such context.</p>

                <p>8.2 To the maximum extent permitted by all applicable laws, regulations and rules, the Foundation shall not be liable for any damage or loss of any kind, whether direct or indirectly, or in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data) or any other impact, directly or indirectly resulting from or relating to:</p>

                <p>(a) the access to and/or use of any content, goods or services available on, from or through any Third Party Online Product and Service;</p>

                <p>(b) the inability to access or the malfunction of any Third Party Online Product and Service;</p>

                <p>(c) the loss, use or misuse of, or unauthorized access to, any data or personal or other financial information provided by you to any Third Party Online Product and Service;</p>

                <p>(d) the failure by any Third Party Online Product and Service to complete any transaction for any reason;</p>

                <p>(e) any failure or break of any Third Party Online Product and Service’s security protections, mechanisms, protocol and/or procedures; and/or</p>

                <p>(f) the direct or indirect use of any Third Party Online Service or any other website or service by other persons.</p>

                <h2>9. NO WAIVER</h2>

                <p>9.1 Any failure of the Foundation and/or its Affiliates to enforce these Terms or to assert any right(s), claim(s) or causes of action against you under these Terms shall not be construed as a waiver of the right of any of the Foundation and/or its Affiliates to assert any right(s), claim(s) or causes of action against you.</p>

                <p>9.2 No provision of these Terms shall be considered waived unless such waiver is in writing and signed by the Party that benefits from the enforcement of such provision. No waiver of any provision in these Terms, however, will be deemed a waiver of a subsequent breach of such provision or a waiver of a similar provision. In addition, a waiver of any breach or a failure to enforce any term or condition of these Terms will not in any way affect, limit, or waive a Party’s rights hereunder at any time to enforce strict compliance thereafter with every term and condition hereof.</p>

                <h2>10. ENTIRE AGREEMENT</h2>

                <p>10.1 These Terms contain the entire agreement and the understanding between the Parties and supersedes all prior agreements, understandings or arrangements (both oral and written) in relation to your Registration.</p>

                <p>10.2 In the event that the Foundation discovers that you, in your Registration, have engaged in unfair, excessive or abusive usage or conduct, the Foundation reserves the right to take such actions as may be necessary, to the fullest extent possible under law, to protect the Foundation and/or its Affiliates from losses, damages, harm or degradation of any form and manner. </p>

                <h2>11. TAXES</h2>

                <p>11.1 You shall be responsible for determining any tax applicable and payable to any taxation authority in respect of your Registration (“<strong>Payable Tax</strong>”) and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities. You shall be solely liable for all penalties, claims, fines, punishments, or other liabilities arising from the non-fulfilment or non-performance to any extent of any of your obligations in relation to the Payable Tax.</p>

                <p>11.2 None of the Foundation or any of its Affiliates shall be responsible for determining any Payable Tax and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities.</p>

                <h2>12. NOTICES</h2>

                <p>12.1 Any notice or other communication to be given under these Terms shall be in writing, and shall be deemed to have been duly served on, given to or made in relation to a Party if it is:</p>

                <p>(a) left at the address of that Party or posted by prepaid airmail/first-class/registered post addressed to that Party at such address, in which case such notice shall be deemed to have been delivered and received at the time of delivery; or </p>

                <p>(b) transmitted by email or facsimile, in which case such notice shall be deemed to be delivered and received at the time of transmission in legible form.</p>

                <p>PROVIDED that where, in the case of delivery by hand, the delivery occurs after 6.00 p.m. on a business day or on a day which is not a business day, receipt shall be deemed to occur at 9.00 a.m. on the next business day.</p>

                <p>12.2 For the purposes of these Terms, the contact details of the Foundation shall be the contact details (including, if applicable, the details of the person for whose attention a notice or communication is to be addressed) as the Foundation may announce on the Website or notify to you in writing from time to time in accordance with the requirements of this Paragraph 12.</p>

                <p>For the purposes of these Terms, your contact details shall be such contact details as you may notify to the Foundation in writing from time to time in accordance with the requirements of this Paragraph 12.</p>

                <h2>13. GOVERNING LAW AND DISPUTE RESOLUTION</h2>

                <p>13.1 These Terms shall be governed by, and construed in accordance with, the laws of the Republic of Singapore.</p>

                <p>13.2 Any dispute between the Parties arising out of or in relation to these Terms (“Dispute”) shall be resolved in accordance with this Paragraph 13.</p>

                <p>13.3 A Party shall give prompt written notice of any Dispute to the other Party (a &quot;Dispute Notice&quot;). Such Dispute Notice will include sufficient details of the Dispute to enable the other Party to consider its position in relation to the Dispute.</p>

                <p>13.4 Each Party agrees to use its best endeavours to settle any Dispute amicably between the Parties within a period of 30 days from the date of the Dispute Notice given under Paragraph 13.3.</p>

                <p>13.5 Only in the event that a Dispute is not settled in accordance with Paragraph 13.4 then either Party may, by notice in writing to the other Party, either refer the Dispute to arbitration pursuant to Paragraph 13.6.</p>

                <p>13.6 In the event that either Party refers a Dispute, such Dispute shall be referred to and finally resolved by arbitration administered by the Singapore International Arbitration Centre in accordance with the Arbitration Rules of the Singapore International Arbitration Centre for the time being in force which rules are deemed to be incorporated by reference in this Paragraph. The seat of the arbitration shall be in Singapore. The Tribunal shall consist of one (1) arbitrator. The language of the arbitration shall be in English. </p>

                <p>13.7 Notwithstanding any Dispute or reference of certain Disputes (or part of certain Disputes) for determination by arbitration pursuant to Paragraph 13.5, the Parties will continue to comply with their respective obligations under these Terms.</p>

                <h2>14. CONTRACTS (RIGHTS OF THIRD PARTIES) ACT</h2>

                <p>14.1 Subject to Clause 14.2, the Contracts (Rights of Third Parties) Act (Chapter 53B) of Singapore, as may be modified, amended or supplemented from time to time, shall apply to these Terms. </p>

                <p>14.2 Save for the Foundation’s Affiliates who shall have rights to the extent accorded thereto under these Terms, a person who is not a Party shall not have any rights whatsoever under these Terms or to enforce these Terms.</p>

                <h2>15. SEVERANCE AND PARTIAL INVALIDITY</h2>

                <p>15.1 If any of these Terms is rendered void, illegal or unenforceable by any legislation to which it is subject, it shall be rendered void, illegal or unenforceable to that extent and no further and, for the avoidance of doubt, the rest of these Terms shall continue to be valid and in full force and effect and shall in no way be affected, impaired or invalidated, and the Parties hereto shall use their commercially reasonable efforts to find and employ an alternative means to achieve the same or substantially the same result as that contemplated by such term, provision, covenant or restriction. It is hereby stipulated and declared to be the intention of the Parties that they would have executed the remaining terms, provisions, covenants and restrictions without including any of such that may be hereafter declared invalid, illegal, void or unenforceable.</p>

                <p>15.2 The illegality, invalidity or unenforceability of any provision of these Terms under the law of any jurisdiction shall not affect its legality, validity or enforceability under the law of any other jurisdiction nor the legality, validity or enforceability of any other provision.</p>

                <h1 id="data-protection">Data Protection</h1>

                <p>The operator of the pre-launch token exchange and the network launch token exchange for the Ocean Tokens (“<strong>Tokens</strong>”), including its onboarding, (altogether “<strong>Service</strong>”) is the Ocean Protocol Foundation Ltd., a company limited by guarantee incorporated in Singapore with its registered address at 20 Pasir Panjang Road #03-22/24, Mapletree Business City, Singapore 117439. We take the protection of your personal data very seriously. We treat your personal data confidentially and according to the legal data protection regulations and this privacy policy (this “<strong>Privacy Policy</strong>”).</p>

                <p>Your provision of personal data, such as names, addresses or e-mail addresses, is strictly on a voluntary basis. However, if you choose not to provide the personal data we require, it may not be possible for us to provide you with the information, products and/or services you want. Subject to the terms of this Privacy Policy, those data will not be passed on to third parties without your permission or without being required by law.</p>

                <p>However, we would like to point out that data transmissions via internet (e.g. e-mail communication) cannot be entirely secure and may have security vulnerabilities. A complete protection of personal details against unauthorised access by third parties is not possible.</p>

                <p>If you provide personal data to us, you consent to the collection, use and disclosure of such personal data in accordance with this policy. If you provide the personal data of another individual, it means that you have informed him/her of the purposes for which we require his/her personal data and he/she has consented to the collection, use and disclosure of his/her personal data in accordance with this policy. </p>

                <h2>Database requests</h2>

                <p>In order to comply with international sanctions and applicable regulation for securities and to fight money-laundering or the financing of terrorism, we need to check the personal data provided by you against publically available databases.</p>

                <h2>Contact form</h2>

                <p>We use Zendesk’s contact form widget. “<strong>Zendesk</strong>” is a service by Zendesk Inc., of 1019 Market St., San Francisco, CA 94103, USA. If you send enquiries to us via Zendesk’s contact form, your data entered into the contact form, including the stated contact data, are stored for the purpose of dealing with your enquiry and in case of additional enquiries. Subject to the terms of this Privacy Policy, those data will not be passed on without your permission.</p>

                <h2>Newsletter</h2>

                <p>If you would like to receive the newsletter offered on this Service, we require your email address as well as information which allow us to check that you are the owner of the provided email address and that you agree to the reception of the newsletter. Further data may be collected, if necessary. We use those data exclusively for the conduct of checks as mentioned above and the sending of the requested information. Subject to the terms of this Privacy Policy, we do not transmit such data to third parties.</p>

                <p>The given permission to the storage of the data, the email address as well as the use of such for the purpose of sending the newsletter can be withdrawn at any time via the &quot;Unsubscribe&quot; link within the newsletter.</p>

                <h2>Processing of data (customer data and contract data)</h2>

                <p>We collect, process, use and disclose personal data necessary for the establishment, content-related arrangement or change of the legal relationship (stock data). We collect, process, use and disclose personal data about the use of our Service (usage data) insofar it is necessary for enabling, improving or invoicing the use of the service.</p>

                <p>In addition, you acknowledge that the purpose of this Service is to provide information about the Project, the Whitelisting and the Initial Token Exchange (the foregoing capitalised terms are defined in the “<strong>Terms and Conditions for Whitelisting for Participation in the public Pre-Launch Token Exchange and the Network Launch Token Exchange of Ocean Protocol Foundation Ltd.</strong>” which is accessible at <a href="https://oceanprotocol.com/terms-prelaunch">oceanprotocol.com/terms-prelaunch</a> If you submit personal data to us for the purpose of being whitelisted for participation in the Initial Token Exchange and/or as a potential acquiror of Tokens, you consent to our collection, processing, use and disclosure of such personal data for the purposes of such whitelisting and also the issuance, distribution, use and circulation of or exchange for Tokens.</p>

                <p>We also reserve the right to monitor, check and process your personal data if necessary to investigate or obtain evidence concerning any complaint, claim or dispute or any actual or suspected illegal or unlawful conduct or to aid in such investigation or evidence gathering by any law enforcement or regulatory authorities. </p>

                <p>We may also collect, process, use and disclose personal data where required or permitted by law for any purpose.</p>

                <p>Notwithstanding anything to the contrary in this Privacy Policy, we may disclose personal data to third parties in order to achieve any purposes stated herein. The third parties include: </p>

                <ul>
                    <li>our service providers and contractors, including third party vendors that provide data processing or management services;</li>
                    <li>our business partners and affiliates;</li>
                    <li>entities whose products and services are payable in Tokens;</li>
                    <li>other holders or users of Tokens;</li>
                    <li>any person involved in the payment for products and services provided to you; and</li>
                    <li>law enforcement authorities, regulatory authorities, statutory bodies or public agencies for the purposes of complying with their requirements, policies, directives or requests.</li>
                </ul>

                <h2>Transmission of data on contract conclusion for services and digital contents</h2>

                <p>Except expressly agreed on, we transmit personal data to third parties only if it is necessary to fulfil the contract, e.g transmitting data to the commissioned credit institution in charge with the payment.</p>

                <h2>Data processors</h2>

                <p>To fulfil the contract, we contracted data processors that are obligated to fully comply with our directives and that may only process your personal data to the extent that we are allowed to do so and only for the given purposes herein.</p>

                <p>Data processor Fractal:<br />
Our data processor Fractal Blockchain UG (haftungsbeschränkt), c/o Space Shack, Akazienstr. 3a, 10823 Berlin, Germany (“<strong>Fractal</strong>”), is processing personal data on our behalf to fulfil the contract, especially for customer identification. Fractal processes personal data only in Germany.
                </p>

                <p>Data processor Heroku:<br />
To store your personal data, we are working together with “<strong>Heroku</strong>”, a service provided by our data processor Heroku Inc., located at The Landmark @ 1 Market St., Suite 300, San Francisco, CA, 94105, United States. Heroku stores personal data only in Ireland.
                </p>

                <p>For further information, please see <a href="https://www.heroku.com/policy/security">Heroku’s data security explanations</a> as well as <a href="https://www.salesforce.com/company/privacy/">Heroku’s Privacy Policy</a>.</p>

                <p>Data processor AWS:<br />
To store your personal data, we are also using Amazon Simple Storage Service, a service provided by our data processor Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, United States (“AWS”). AWS stores your personal data only in Frankfurt, Germany.
                </p>

                <p>For further information, please see <a href="https://aws.amazon.com/privacy/?nc1=h_ls">AWS’s Privacy Policy</a>.</p>

                <p>Data processor CS Compliance:<br />
To process your personal data, we are also using KYC Screening services, a service provided by our data processor CS Compliance Services Ltd. (“<strong>CS Compliance</strong>”). CS Compliance [processes your data in compliance with the German data privacy regulations.
                </p>

                <p>For further information, please email CS Compliance’s Privacy Policy contact info@cs-compliance-service.de </p>

                <p>Data processor LexisNexis:<br />
To process your personal data, we are also using CDDS AML Risk API, a service provided by our data processor LexisNexis GmbH (“<strong>LexisNexis</strong>”). LexisNexis processes your personal data in compliance with the applicable data protection laws.
                </p>

                <p>For further information, please see <a href="https://www.lexisnexis.com/en-us/privacy/default.page">LexisNexis’ Privacy Policy</a>.</p>

                <h2>Commercial Use Policy</h2>

                <p>Only in the event and for the time that you give us your consent we use your personal data and/or transmit it to our business partners DEX Pte. Ltd. (Singapore), BigchainDB GmbH, Interplanetary Database Foundation e.V. and Fractal (each Berlin, Germany), in order for us or our business partners to inform you via e-mail about upcoming opportunities that are similar to the Initial Token Exchange that you may participate in with us through this Service or to market and promote our respective products and services.</p>

                <p>You may view, withdraw and (re-)give your declaration of consent at any time by sending an e-mail to the provider of this Service. To withdraw your consent, you may also contact us under the address published in the footer of the e-mail/imprint/legal notice.</p>

                <h2>Right of access to and correction of personal data</h2>

                <p>You have the right to be informed about your personal data in our possession or under our control, their origin and addressee and the purpose of data processing as well as the right to correction of those data at any time. For further questions and questions concerning personal data, feel free to contact us under the address published in the imprint/legal notice.</p>

                <h2>Objection to commercial mails</h2>

                <p>The providers of this Service or the information, products or services featured on this Website may publish their contact information in the Footer of e-mails/Legal Note/Imprint. The use of such contact information by third parties for the purpose of distributing unsolicited advertisements or other commercial information is prohibited. The operators of this Service reserve the right to take legal measures in case of being sent unsolicited commercial information, e.g. spam mails etc.</p>

                <h2>Amendment of this Privacy Policy</h2>

                <p>We may amend this Privacy Policy from time to time and will make available the updated Privacy Policy via e-mail. Each time we collect, process, use or disclose personal data, the latest version of this Privacy Policy in force at the time will apply.</p>

                <h1 id="privacy-policy-eu">Privacy Policy EU</h1>

                <p>Ocean Protocol Foundation Ltd. (“<strong>Ocean Protocol Foundation</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>our</strong>”) is a Singapore based non-profit company limited by guarantee having its registered address at 20 Pasir Panjang Road #03-22/24, Mapletree Business City, Singapore 117439. Its mandate is to ensure open access to the Ocean Protocol and the Ocean Protocol platform, operate the pre-launch token exchange and network launch token exchange for Ocean Tokens (“<strong>Tokens</strong>”), including its onboarding, provide long-term governance, community and ecosystem, and be a custodian of funds raised (the “<strong>Services</strong>”). DEX Pte. Ltd. and BigchainDB GmBH are the founders of Ocean Protocol Foundation. </p>

                <p>Ocean Protocol Foundation is committed to demonstrating the highest level of integrity in dealing with our customers, investors and other business partners. When you are using Ocean Protocol Foundation’s Services and electronic media, we may collect, process and/or disclose data that identify you or make you identifiable (“<strong>Personal Data</strong>“) in accordance with this privacy policy (“<strong>Policy</strong>”). Further, we may either receive your Personal Data directly from you when you are sending e-mails to us or provide your Personal Data otherwise in the course of other interactions with us, or indirectly from third parties who legally provide your Personal Data to us.</p>

                <p>This Policy is meant to inform you, which Personal Data we collect, store, process, use and/or disclose, for which purposes and on which legal basis. We further inform you about your rights to protect your Personal Data. </p>

                <p>This Policy may be amended or updated from time to time to reflect changes in our practices with respect to the Processing of Personal Data, or changes in applicable law. We encourage you to read this Policy carefully, and to regularly check this page to review any changes we might make in accordance with the terms of this Policy. Your continued use of our Services or website constitutes your agreement to be bound by this Policy, as amended or updated from time to time.</p>

                <p><strong>Please note that Ocean Protocol Foundation collects your Personal Data directly from the country where you are based and stores it on servers in EU.</strong></p>

                <p><strong>Information about our Contact Form</strong>
                    We use Zendesk’s contact form widget. “<strong>Zendesk</strong>” is a service by Zendesk Inc., of 1019 Market St., San Francisco, CA 94103, USA. If you send enquiries to us via Zendesk’s contact form, your Personal Data is transferred to the USA, where the level of data protection is lower than in the EU/EEA.
                </p>

                <h2>Which Personal Data we process</h2>

                <p>The categories of Personal Data about you that we may Process include:</p>

                <ul>
                    <li><strong>Personal</strong> details: name, gender, date of birth / age, nationality, passport or national ID number, social security number, tax identification number;</li>
                    <li><strong>Contact details</strong>: address, e-mail address, telephone number, social media account details;</li>
                    <li><strong>Financial details</strong>: bank information for payments, credit card information for payments, utility bill, credit report, other financial details with respect to ‘Accredited Investor’ verification for residents of the United States of America or Canada;</li>
                    <li><strong>Corporate details</strong>: name, place of registration, registration number, transparency register number, details with respect to articles of association and other similar documents / certificates, details with respect to shareholders and/or beneficial owners (including their personal and contact details);</li>
                    <li>technical information of your device which you use for orders and communication (cell phone, tablet, notebook, personal computer, etc. (e.g. IP address),</li>
                    <li>log in information (e-mail address, password); and</li>
                    <li>your cryptocurrency address.</li>
                </ul>

                <h2>How we collect your Personal Data</h2>

                <p>We may collect Personal Data about you from the following sources:</p>

                <ul>
                    <li>When you contact us via e-mail, telephone or by any other means;</li>
                    <li>We may collect your Personal Data in the ordinary course of our relationship with you (e.g., Personal Data we obtain in the course of administering your payments);</li>
                    <li>When we provide you with access to the Ocean Protocol (e.g., when you register as a data provider or data consumer);</li>
                    <li>Where you have manifestly chosen to make such Personal Data public, including via social media profiles;</li>
                    <li>When we receive your Personal Data from third parties who legally provide it to us, such as credit reference agencies or law enforcement agencies;</li>
                    <li>When you visit any of our websites or use any features or resources available on or through our websites. When you visit our website, your device and browser may automatically disclose certain information (such as device type, operating system, browser type, browser settings, IP address, language settings, dates and times of connecting to a website and other technical communications information), some of which may constitute Personal Data;</li>
                    <li>When you submit your resume/CV to us for a job application;</li>
                    <li>When you acquire the Tokens; and</li>
                    <li>When you are participating in the Initial Token Exchange (as defined in the “Terms and Conditions for Whitelisting for Participation in the Initial Token Exchange of Ocean Protocol Foundation Ltd.” which is accessible at <a href="https://oceanprotocol.com/terms-prelaunch">oceanprotocol.com/terms-prelaunch</a>).</li>
                </ul>

                <h2>Creation of Personal Data</h2>

                <p>In the course of your interaction on the Ocean Protocol platform, we may also create Personal Data about you, such as records of your interactions with us and details of your transaction history.</p>

                <h2>For which purposes we use your Personal Data</h2>

                <p>We use your Personal Data to provide, maintain and improve our Services, to grant you access to Ocean Protocol and enable you the use of the Ocean Protocol and the Ocean Protocol platform. For marketing purposes, we use your Personal Data only if and as long as we have received your explicit prior consent and in accordance with respectively applicable additional legal requirements in your jurisdiction. We do not sell your Personal Data to third parties.</p>

                <p>In addition, you acknowledge that the purpose of our Service is to provide information about the Initial Project, the Whitelisting and the Initial Token Exchange (the foregoing capitalised terms are defined in the “<strong>Terms and Conditions for Whitelisting for Participation in the Initial Token Exchange of Ocean Protocol Foundation Ltd.</strong>” which is accessible at <a href="https://oceanprotocol.com/terms-prelaunch">oceanprotocol.com/terms-prelaunch</a>. If you submit Personal Data to us for the purpose of being whitelisted for participation in the Initial Token Exchange and/or as a potential acquiror of the Tokens, you consent to our collection, processing, use and disclosure of such personal data for the purposes of such whitelisting and also the issuance, distribution, use and circulation of or exchange for the Tokens.</p>

                <h2>Lawful basis for Processing Personal Data</h2>

                <p>In Processing your Personal Data in connection with the purposes set out in this Policy, we may rely on one or more of the following legal bases, depending on the circumstances:</p>

                <ul>
                    <li>we have obtained your explicit prior consent to the Processing (this legal basis is only used in relation to Processing that is entirely voluntary – it is not used for Processing that is necessary or obligatory in any way);</li>
                    <li>the Processing is necessary in connection with any contractual relationship that you may enter into with us;</li>
                    <li>the Processing is required by applicable law;</li>
                    <li>the Processing is necessary to protect the vital interests of any individual; or</li>
                    <li>we have a legitimate interest in carrying out the Processing for the purpose of managing, operating or promoting our business, and that legitimate interest is not overridden by your interests, fundamental rights, or freedoms.</li>
                </ul>

                <p>When we are involving third party Processors into the performance of our services and contractual obligations and such involvement requires the sharing of Personal Data, we have entered with our third party Processors into data processing agreements according to Art. 28 of the European General Data Protection Regulation (“<strong>GDPR</strong>”) and, as far as required, further appropriate safeguards according to Art. 46 – 49 GDPR. The list of third party Processors to which we disclose your Personal Data can be requested by e-mail to <a href="mailto:privacy@oceanprotocol.com">privacy@oceanprotocol.com</a>.</p>

                <p>Specifically we can already name the following Processors:</p>

                <p>Data processor Fractal:<br />
Our data processor Fractal Blockchain UG (haftungsbeschränkt), c/o Space Shack, Akazienstr. 3a, 10823 Berlin, Germany (“Fractal”), is processing personal data on our behalf to fulfil the contract, especially for customer identification. Fractal processes personal data only in Germany.
                </p>

                <p>Data processor Heroku:<br />
To store your personal data, we are working together with “Heroku”, a service provided by our data processor Heroku Inc., located at The Landmark @ 1 Market St., Suite 300, San Francisco, CA, 94105, United States. Heroku stores personal data only in Ireland.
                </p>

                <p>For further information, please see Heroku’s data security explanations https://www.heroku.com/policy/security as well as Heroku’s Privacy Policy: https://www.salesforce.com/company/privacy/</p>

                <p>Data processor AWS:<br />
To store your personal data, we are also using Amazon Simple Storage Service, a service provided by our data processor Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, United States (“AWS”). AWS stores your personal data only in Frankfurt, Germany.
                </p>

                <p>For further information, please see AWS’s Privacy Policy: https://aws.amazon.com/privacy/?nc1=h_ls.</p>

                <p>Data processor CS Compliance:<br />
To process your personal data, we are also using KYC Screening services, a service provided by our data processor CS Compliance Services Ltd. (“CS Compliance”). CS Compliance [processes your data in compliance with the German data privacy regulations.
                </p>

                <p>For further information, please email CS Compliance’s Privacy Policy contact person : Kai Petersen at kai.petersen@cs-compliance-service.de.</p>

                <p>Data processor LexisNexis:<br />
To process your personal data, we are also using CDDS AML Risk API, a service provided by our data processor LexisNexis GmbH (“LexisNexis”). LexisNexis processes your personal data in compliance with the applicable data protection laws.
                </p>

                <p>For further information, please see LexisNexis’ Privacy Policy: https://www.lexisnexis.com/en-us/privacy/default.page</p>

                <p><strong>Categories of third parties “Non-Processors” to whom we may disclose your Personal Data</strong>
                    We may also disclose your Personal Data to third parties who are not Processors in terms of Art. 28 of the GDPR.
                </p>

                <p>The categories of such Non-Processors are:</p>
                <ul>
                    <li>banks, credit agencies and other financial and/or payment service providers</li>
                    <li>our group affiliates (list of which can be found requested by email: privacy@oceanprotocol.com)</li>
                    <li>other holders or users of Ocean Tokens</li>
                    <li>IT-service providers</li>
                </ul>

                <h2>Processing your Sensitive Personal Data</h2>

                <p>We do not seek to collect or otherwise Process your Sensitive Personal Data, except where:</p>

                <ul>
                    <li>the Processing is required or permitted by applicable law (e.g., to comply with our diversity reporting obligations);</li>
                    <li>the Processing is necessary for the detection or prevention of crime (including the prevention of fraud);</li>
                    <li>the Processing is necessary for the establishment, exercise or defence of legal rights; or</li>
                    <li>we have, in accordance with applicable law, obtained your explicit consent prior to Processing your Sensitive Personal Data (as above, this legal basis is only used in relation to Processing that is entirely voluntary – it is not used for Processing that is necessary or obligatory in any way).</li>
                </ul>

                <h2>Consequences if we may not collect your Personal Data</h2>

                <p>We need your Personal Data to provide our Services to you and/or perform our contractual obligations towards you. Without providing such Personal Data, we may not be able to provide you the services you are intending to receive.</p>

                <h2>Consent and withdrawal</h2>

                <p>Any consent is provided freely. If you give your consent, you have the right to withdraw your consent at any time. The withdrawal of consent does not affect the lawfulness of Processing based on consent before its withdrawal. After your withdrawal we will stop to Process your Personal Data, including storage. This paragraph is only relevant for Processing that is entirely voluntary – it does not apply for Processing that is necessary or obligatory in any way.</p>

                <p>To withdraw your consent, please send us an e-mail to <a href="mailto:privacy@oceanprotocol.com">privacy@oceanprotocol.com</a> or a letter to Ocean Protocol Foundation Limited, 20 Pasir Panjang Road #03-22/24, Mapletree Business City, Singapore 117439. </p>

                <h2>Cookies</h2>

                <p>We may use cookies from time to time. A Cookie is a unique text file that a Web site can send to your browser software. Cookies do not include any Personal Data. We may use Cookies to identify the browser you are using so that our website displays properly. We also use cookies in various places on our website in order to document your visit to our website and allow for a more efficient website design. </p>

                <p>If you do not want to allow us to use Cookies, you can disable Cookie installation via your browser setting or refuse the installation of Cookies when prompted to this effect. You also have the option of deleting Cookies from your computer’s hard disk at any time. The Cookies will be deleted automatically after the period of time prescribed by the concerned regulations in force at that time.</p>

                <h2>Marketing Activities</h2>

                <p>In case you consented to our Marketing Policy, we may transfer your Personal Data to our business partners</p>
                <ul>
                    <li>DEX Pte. Ltd. (Singapore),</li>
                    <li>BigchainDB GmbH, Interplanetary Database Foundation e.V. (Berlin, Germany) and</li>
                    <li>Fractal (Berlin, Germany),</li>
                </ul>

                <p>in order for us or our business partners to inform you via e-mail about upcoming opportunities that are similar to the Initial Token Exchange or to market and promote our respective products and services.</p>

                <h2>Links to Business Partner and Co-Branded Sites</h2>

                <p>Certain links contained on Ocean Protocol Foundation web sites may direct you to co-branded web sites maintained by Ocean Protocol Foundation or to companies which Ocean Protocol Foundation has established business relationships. When you submit information to one of these co-branded sites or partner companies, you may be submitting it to both Ocean Protocol Foundation and these business partners. Under no circumstances may Ocean Protocol Foundation be held responsible for the privacy practices of these business partners and we therefore strongly encourage you to read their respective privacy policies as they may differ from ours.</p>

                <h2>When we erase your Personal Data</h2>

                <p>We erase your Personal Data automatically when they are no longer required for the purposes listed above. We also erase your Personal Data according to your request and if further storage is neither required nor permitted by applicable laws.</p>

                <h2>Your rights related to data privacy</h2>

                <p>You have the right to request access to and rectification or erasure of your Personal Data, or restriction of their Processing. Furthermore, you have the right to object Processing as well as to request data portability. If you are in the EU you have the right to file a complaint to the responsible European Data Protection Authority.</p>

                <h2>Our contact information, Data Controller</h2>

                <p>If you have a direct business relationship with us, we are Data Controller according to Art. 4 para. 7 GDPR. For any requests you can contact us as follows:</p>

                <p>Mapletree Business City<br />
                    20 Pasir Panjang Rd<br />
                    East Wing #03-22/24<br />
                    Singapore, 117439<br />
                    Singapore<br />
                </p>

                <p>Our data privacy officer you can contact is as follows:</p>

                <p><a href="mailto:privacy@oceanprotocol.com">privacy@oceanprotocol.com</a></p>

                <p>We may process your data on behalf of a contract partner of yours (e.g. internet-shop, vendor, seller, service provider). In this case, the privacy policy of your partner applies. Please contact your contract partner for more information.</p>

                <p><strong>(A)</strong> Definitions </p>

                <ul>
                    <li><p>‘<strong>Controller</strong>’ means the entity that decides how and why Personal Data is Processed. In many jurisdictions, the Controller has primary responsibility for complying with applicable data protection laws.</p></li>
                    <li><p>‘<strong>Data Protection Authority</strong>’ means an independent public authority that is legally tasked with overseeing compliance with applicable data protection laws.</p></li>
                    <li><p>‘<strong>EEA</strong>’ means the European Economic Area.</p></li>
                    <li><p>‘<strong>Personal Data</strong>’ means information that is about any individual, or from which any individual is identifiable. Examples of Personal Data that we may Process are provided above in this Policy.</p></li>
                    <li><p>‘<strong>Process</strong>’, ‘<strong>Processing</strong>’ or ‘<strong>Processed</strong>’ means anything that is done with any Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p></li>
                    <li><p>‘<strong>Processor</strong>’ means any person or entity that Processes Personal Data on behalf of the Controller (other than employees of the Controller).</p></li>
                    <li><p>‘<strong>Services</strong>’ means any services provided by Ocean Protocol Foundation.</p></li>
                    <li><p>‘<strong>Sensitive Personal Data</strong>’ means Personal Data about race or ethnicity, political opinions, religious or philosophical beliefs, trade union membership, physical or mental health, sexual life, any actual or alleged criminal offences or penalties, or any other information that may be deemed to be sensitive under applicable law.</p></li>
                </ul>

                <h1 id="marketing-consent">Marketing Consent</h1>

                <p><strong>I herewith agree to receive marketing and advertising information from Ocean Protocol Foundation Ltd.</strong></p>

                <p>I herewith agree to receive marketing and advertising information from the business partners of Ocean Protocol Foundation Ltd., namely:</p>
                <ul>
                    <li>DEX Pte. Ltd. (Singapore),</li>
                    <li>BigchainDB GmbH, Interplanetary Database Foundation e.V. and</li>
                    <li>Fractal Blockchain UG (each Berlin, Germany),</li>
                    <li>Fractal Launchpad GmbH (each Berlin, Germany),</li>
                </ul>

                <p>Please note that you will receive an email where we request you to click on a confirmation link in order to confirm that you are the owner of the e-mail address you provided to us for marketing communication.</p>

                <p>You may view, withdraw and (re-)give your declaration of consent at any time by sending an e-mail to the provider of this Service <a href="mailto:privacy@oceanprotocol.com">privacy@oceanprotocol.com</a>. To withdraw your consent, you may also contact us under the address published in the footer of the e-mail/imprint/legal notice.</p>

                <p><strong>Mapletree Business City</strong>
                    <strong>20 Pasir Panjang Rd</strong>
                    <strong>East Wing #03-22/24</strong>
                    <strong>Singapore, 117439</strong>
                    <strong>Singapore</strong>
                </p>

            </ContentRow>
        </StyledSection>
    </Fragment>
)

export default TermsPrelaunch
