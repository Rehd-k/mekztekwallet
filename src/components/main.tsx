'use client'

import Link from 'next/link';
import '../../public/css/main.css';
import Image from 'next/image';


export default function MainIndex() {


    return <>
        <section className="" id="hero">
            <div className="banner burger  align-item-center parallax">
                <div className="container">
                    {/* container-start */}
                    <div className="row align-item-center mt3">
                        {/* row start */}
                        <div id="overlay" />
                        <div className="fullscreen-bg">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="fullscreen-bg__video"
                            >
                                <source src="/videos/video.mp4" type="video/mp4" />
                                Your browser does not support This video.
                            </video>
                        </div>
                        <div className="col-sm-6 col-lg-6 ">
                            {/* column start */}
                            <div className="banner-text">
                                <h1
                                >
                                    <strong className="template-color">
                                        Qfsasset xledgers
                                        <a href="javascript:void(0);" style={{ fontSize: "25pt" }}>
                                            <i className="fa fa-wallet" />
                                        </a>
                                    </strong>{" "}
                                    THE SMARTEST WAY TO SECURE YOUR CRYPTO
                                </h1>
                                <div>
                                    <p className="big-pera">
                                        qfsassetxledgers The Easiest and Most Powerful Crypto Ledger{" "}
                                    </p>
                                </div>
                                <div
                                    className="mt3 banner-btn-group"
                                >
                                    <Link href="/register" className=" btn-alpha ">
                                        Open Account
                                    </Link>
                                    <Link href="/login" className=" btn-alpha ">
                                        Login{" "}
                                    </Link>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </div>
            <div
                style={{
                    height: 62,
                    backgroundColor: "#1D2330",
                    overflow: "hidden",
                    textAlign: "right",
                    lineHeight: 14,
                    blockSize: 62,
                    fontSize: 12,
                    fontFeatureSettings: "normal",
                    textSizeAdjust: "100%",
                    padding: 0,
                    margin: 0,
                    width: "100%"
                }}
            >
                <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
                    <iframe
                        src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
                        width="100%"
                        height="36px"
                        style={{ border: 0, margin: 0, padding: 0 }}
                    />
                </div>
            </div>
            {/*================= banner-end ==================*/}
        </section>
        <section id="about">
            <div className="pross-grid t-pross-grid dark-template-light-bg shapebg-left">
                <div className="b-burger">
                    <div className="container">
                        <div className="row">
                            {/* row-start */}
                            <div
                                className="col-lg-12 mb6"
                            >
                                {/* column start */}
                                <h2>qfsassetxledgers POWERING THE CRYPTOECONOMY!</h2>
                                <p className="big-pera">
                                    qfsassetxledgers is an Institutional Markets is a full-stack
                                    crypto services platform that works with crypto-native
                                    businesses and institutional clients on lending, trading, and
                                    custody solutions tailored to your needs.
                                </p>
                                <p className="big-pera">
                                    The world is leading crypto finance house serving people,
                                    projects, protocols and institutions since 2015.
                                </p>
                            </div>
                            <div
                                className="col-lg-12 mb6"
                            >
                                <h2>PROFESSIONALS ON BLOCKCHAIN DATA</h2>
                                <h4>What we are good at</h4>
                                <li>
                                    Confirm transactions, analyze the market, or simply learn more
                                    about crypto.
                                </li>
                                <li>
                                    Without any doubt, the main advantage of the Trovechains
                                    platform is the accessibility of our financial program. We are
                                    always open to any kinds of crypto investors, in spite of their
                                    nationality, country of residence or social status.
                                </li>
                                <li>
                                    We have powered exchanges, data analysts, enthusiasts, and more.
                                </li>
                                <li>
                                    From hashrate, to block details, to mining information, and
                                    more.
                                </li>
                                <li>
                                    Get the latest prices and charts along with key market signals.
                                </li>
                            </div>
                            {/* column end */}
                        </div>
                        {/* row end */}
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div
                                    className="pross-item col-sm-3"
                                >
                                    <Image
                                        src="/images/accepted-worldwide.svg"
                                        alt="logo"
                                        width={70}
                                        height={70}
                                    />
                                    <h3>Accepted Worldwide</h3>
                                    <p className="mt2 big-pera">
                                        A worldwide trading platform with top level security.
                                    </p>
                                </div>
                                <div
                                    className="pross-item col-sm-3"
                                >
                                    <Image
                                        src="/images/decentralised-currency.svg"
                                        alt="logo"
                                        width={70}
                                        height={70}
                                    />
                                    <h3>Decentralised Currency</h3>
                                    <p className="mt2 big-pera">
                                        {" "}
                                        Transparency and decentralisation of our network currency.
                                    </p>
                                </div>
                                <div
                                    className="pross-item col-sm-3"
                                >
                                    <Image
                                        src="/images/safe-and-secure.svg"
                                        alt="logo"
                                        width={70}
                                        height={70}
                                    />
                                    <h3>Safe And Secure</h3>
                                    <p className="mt2 big-pera">
                                        {" "}
                                        World leading security team to secure your crypto assets.
                                    </p>
                                    <p>
                                        We store the vast majority of the digital assets in secure
                                        offline storage
                                    </p>
                                </div>
                                <div
                                    className="pross-item col-sm-3"
                                >
                                    <Image
                                        src="/images/payment-integration.svg"
                                        alt="logo"
                                        width={70}
                                        height={70}
                                    />
                                    <h3>Protected by insurance</h3>
                                    <p className="mt2 big-pera">
                                        {" "}
                                        qfsassetxledgers maintains crypto insurance and all USD cash
                                        balances are covered by FDIC insurance, up to a maximum of
                                        $400,000.!.
                                    </p>
                                </div>
                                {/* column end */}
                            </div>
                            {/*col-lg-8*/}
                        </div>
                        {/* row end */}
                    </div>
                    {/* container end */}
                </div>
            </div>
            {/*========= why-cryptency-end====== */}
            <div className="about-cryptency burger dark-template-bg">
                <div className="container">
                    {/* container-start */}
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2"></div>
                    </div>
                    <div className="row">
                        {/* row start */}
                        <div
                            className="col-sm-5"
                        >
                            {/* column start */}
                            <div
                                style={{
                                    height: 333,
                                    backgroundColor: "#1D2330",
                                    overflow: "hidden",
                                    textAlign: "right",
                                    lineHeight: 14,
                                    fontSize: 12,
                                    fontFeatureSettings: "normal",
                                    textSizeAdjust: "100%",
                                    padding: 0,
                                    margin: 0,
                                    width: "100%"
                                }}
                            >
                                <div
                                    style={{ height: 313, padding: 0, margin: 0, width: "100%" }}
                                >
                                    <iframe
                                        src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=5&pref_coin_id=1505&graph=yes"
                                        width="100%"
                                        height="409px"

                                        style={{ border: 0, margin: 0, padding: 0 }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* column end */}
                        <div className="col-sm-6 col-sm-offset-1">
                            {/* column start */}
                            <div
                            >
                                <h2 className="text-center">ONE-CLICK EASY</h2>
                                <p className="big-pera mt0">
                                    qfsassetxledgers is designed for people who have never used an
                                    exchange. Ready to exchange Bitcoin for another asset?
                                    qfsassetxledgers hides the complex details while assets are
                                    exchanged behind the scenes in seconds.!
                                </p>
                                <p className="big-pera ">
                                    qfsassetxledgers is a software platform ONLY and does not conduct
                                    any independent diligence on or substantive review of any
                                    blockchain asset, digital currency, cryptocurrency or associated
                                    funds.
                                </p>
                                <p className="big-pera ">
                                    You are fully and solely responsible for evaluating your
                                    Transaction, for determining whether you will exchange
                                    blockchain assets based on your own, and for all your decisions
                                    as to whether to exchange blockchain assets with the Trovechains
                                    in app exchange feature.
                                </p>
                            </div>
                            <div className="check-list mt2">
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/arrow-right.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Open an account.</h3>
                                    </div>
                                </div>
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/arrow-right.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Make a quick and easy deposit.</h3>
                                    </div>
                                </div>
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/arrow-right.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Start exchanging.</h3>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="register"
                                className="btn mt3 btn-alpha"
                              
                            >
                                Open Account{" "}
                            </Link>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </div>
            {/*=========== current-rates-end============= */}
            <div className="burger about-special  ">
                <div className="container">
                    {/* container-start */}
                    <div className="row align-item-center">
                        {/* row start */}
                        <div className="col-sm-12 col-lg-7">
                            {/* column start */}
                            <div className="dark-template-bg">
                                <div className="benifit-contant">
                                    <h2
                                        className="mt0"
                                    >
                                        What is special about qfsassetxledgers
                                    </h2>
                                    <div
                                    >
                                        <p className="big-pera">
                                            we are qfsassetxledgers, and our digital financial service
                                            makes it fast, safe and fun to transact digital currency,
                                            anywhere in the world. We believe that the future of money
                                            is one where we, the people, are in control of our own
                                            economy. <br /> A future where there is no place for
                                            middle-men, hidden fees and fine print.
                                        </p>
                                    </div>
                                    <Link
                                        href="/register"
                                        className="mt2 btn-white"
                                    >
                                        Open Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* column end */}
                        <div className="col-sm-12 col-lg-5 ">
                            {/* column start */}
                            <div className="benifit-box">
                                <div className="row">
                                    {/* row start */}
                                    <div
                                        className="media-item col-sm-6"
                                    >
                                        {/* column start */}
                                        <div className="media mb3">
                                            <Image
                                                src="/images/accepted-worldwide.svg"
                                                alt="secure"
                                                className="pull-left"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="media-body">
                                                <h3>Accepted Worldwide</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column end */}
                                    <div
                                        className="col-sm-6 media-item"
                                    >
                                        {/* column start */}
                                        <div className="media mb3">
                                            <Image
                                                src="/images/decentralised-currency.svg"
                                                alt="secure"
                                                className="pull-left"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="media-body">
                                                <h3>Decentralised Currency</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column end */}
                                </div>
                                {/* row end */}
                                <div className="row">
                                    {/* row start */}
                                    <div
                                        className="col-sm-6 media-item"
                                    >
                                        {/* column start */}
                                        <div className="media ">
                                            <Image
                                                src="/images/safe-and-secure.svg"
                                                alt="secure"
                                                className="pull-left"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="media-body">
                                                <h3>Safe And Secure</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column end */}
                                    <div
                                        className="col-sm-6 media-item"
                                    >
                                        {/* column start */}
                                        <div className="media ">
                                            <Image
                                                src="/images/payment-integration.svg"
                                                alt="secure"
                                                className="pull-left"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="media-body">
                                                <h3>Guaranteed</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* column end */}
                                </div>
                                {/* row end */}
                            </div>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                </div>
                {/* container start */}
            </div>
        </section>
        {/* ======== about-end =============== */}
        <section id="about">
            <div className="about-cryptency burger dark-template-light-bg">
                <div className="container">
                    {/* container-start */}
                    <div className="row align-item-center">
                        {/* row start */}
                        <div className="col-sm-5 col-sm-offset-1 col-sm-push-6">
                            {/* column start */}
                            <div className="row" style={{ textAlign: "center" }}>
                                <div
                                    className="col-sm-12"
                                ></div>
                                <br />
                                <br />
                            </div>
                        </div>
                        {/* column end */}
                        <div className="col-sm-6 col-sm-pull-6">
                            {/* column start */}
                            <h2>
                                Our services your control
                            </h2>
                            <p className="big-pera">
                                With our ultra flexible and speedy in transacting, you always have
                                full control of your funds at your fingertips.
                            </p>
                            <div className="check-list mt2">
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/checked.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Low transaction fees.</h3>
                                    </div>
                                </div>
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/checked.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Real-time Update.</h3>
                                    </div>
                                </div>
                                <div
                                    className="media"
                                >
                                    <Image
                                        src="/images/checked.svg"
                                        alt="cehck"
                                        width={30}
                                        height={30}
                                        className="pull-left"
                                    />
                                    <div className="media-body">
                                        <h3>Live support system.</h3>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/register"
                                className="btn mt3 btn-alpha"
                            >
                                Open Account
                            </Link>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </div>
            {/*========= why-cryptency-end====== */}
        </section>
        <section id="buy-token">
            <div className="burger dark-template-bg buy-token shapebg-right">
                <div className="container-fluid">
                    <div className="row">
                        {/* row-start */}
                        <div
                            className="col-lg-6 col-lg-offset-3  text-center mb5"

                        >
                            {/* column start */}
                            <h2>Live cryptocurrency price</h2>
                            <p className="big-pera">
                                Cryptocurrency live price widget. Monitor currency price changes.
                            </p>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                    <div className="row guter align-item-end">
                        {/* row start */}
                        <div
                            className="col-sm-6 col-xs-12"
                        >
                            {/* column start */}
                            <div
                                style={{
                                    height: 460,
                                    backgroundColor: "#1D2330",
                                    overflow: "hidden",
                                    borderRadius: 4,
                                    textAlign: "right",
                                    lineHeight: 14,
                                    fontSize: 12,
                                    fontFeatureSettings: "normal",
                                    textSizeAdjust: "100%",
                                    padding: 0,
                                    margin: 0,
                                    width: "100%"
                                }}
                            >
                                <div
                                    style={{ height: 440, padding: 0, margin: 0, width: "100%" }}
                                >
                                    <iframe
                                        src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505"
                                        width="100%"
                                        height="536px"

                                        style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* column end */}
                        <div
                            className="col-sm-6 col-xs-12"
                        >
                            {/* column start */}
                            <div
                                style={{
                                    height: 460,
                                    backgroundColor: "#1D2330",
                                    overflow: "hidden",
                                    borderRadius: 4,
                                    textAlign: "right",
                                    lineHeight: 14,
                                    fontSize: 12,
                                    fontFeatureSettings: "normal",
                                    textSizeAdjust: "100%",
                                    padding: 0,
                                    margin: 0,
                                    width: "100%"
                                }}
                            >
                                <div
                                    style={{ height: 440, padding: 0, margin: 0, width: "100%" }}
                                >
                                    <iframe
                                        src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1505"
                                        width="100%"
                                        height="536px"

                                        style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* column end */}
                    </div>
                    {/* row end */}
                </div>
                {/* container end */}
            </div>
            {/* Distribution-section-end */}
        </section>
        {/*================ but-token ================ */}
        <section className="burger dark-template-bg services" id="service">
            <div className="container">
                {/* container-start */}
                <div className="row">
                    {/* row start */}
                    <div className="col-sm-12 col-lg-8 col-lg-offset-2 text-center">
                        {/* column start */}
                        <h2>
                            OUR MISSION
                        </h2>
                        <p>SMART MISSION MANAGEMENT</p>
                        <div>
                            <p className="big-pera">
                                In qfsassetxledgers Our mission is to facilitate the global free
                                flow of digital value.
                            </p>
                            <p className="big-pera">
                                qfsassetxledgers believes that technological progress will
                                revolutionize the way we create and distribute value. One day,
                                everyone will be involved with crypto
                            </p>
                            <p className="big-pera">
                                Technology-Driven Products We are leveraging cutting-edge
                                technologies to create useful services to improve accessibility to
                                the blockchain revolution.
                            </p>
                        </div>
                    </div>{" "}
                    {/* column end */}
                </div>
                {/* row end */}
                <div className="row align-item-center mt6">
                    {/* row start */}
                    <div className="col-lg-8 col-sm-12 col-lg-offset-2">
                        {/* column start */}
                        <div className="services-list">
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/investment.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>KYC</span>
                            </div>
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/digital-cash.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>Crypto Banking</span>
                            </div>
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/fast-transaction.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>Fast transaction</span>
                            </div>
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/low-risk.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>Asset management</span>
                            </div>
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/payment-integration.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>Real Time Update guaranteed</span>
                            </div>
                            <div
                                className="service-box"
                            >
                                <Image
                                    src="/images/safe-and-secure.svg"
                                    className="img-responsive"
                                    alt="cryptency"
                                    width={50}
                                    height={50}
                                />
                                <span>Asset security</span>
                            </div>
                        </div>
                    </div>
                    {/* column end */}
                </div>
                {/* row end */}
            </div>
            {/* container end */}
        </section>
        {/* =============== Team-end ===============*/}
        {/*=================== Faq-section-end=============== */}
        <section className="burger dark-template-light-bg shapebg-right" id="contact">
            <div className="container">
                {/* container-start */}
                <div className="row align-item-center">
                    {/* row start */}
                    <div className="col-sm-7 col-sm-offset-1  ">
                        {/* column start */}
                        <div className="contact-form">
                            <h2
                                className="text-center mb5"
                            >
                                Send a message{" "}
                            </h2>
                            <form
                                method="post"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="SBGnI7DswfTqmh4zglHSE8b9JociZvwat9cV5Mfb"
                                />
                                <div id="form-messages" className="notification contact" />
                                <div className="row">
                                    {/* row-start */}
                                    <div className="col-sm-12">
                                        {/* column start */}
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="fullname"
                                                required
                                                type="text"
                                            />
                                            <label htmlFor="fullname">Full Name :</label>
                                        </div>
                                    </div>
                                    {/* column end */}
                                </div>
                                {/* row end */}
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="uemail"
                                        required
                                        type="email"
                                        placeholder=""
                                    />
                                    <label htmlFor="email">Email :</label>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        required
                                        placeholder=""
                                        defaultValue={""}
                                    />
                                    <label htmlFor="message">Message :</label>
                                </div>
                                <button type="submit" className="btn-white" name="submit">
                                    {" "}
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* column end */}
                    <div
                        className="col-sm-4 col-sm-pull-1"
                    >
                        {/* column start */}
                        <div className="contact-info">
                            <h3 className="text-center mb3 mt0">Contact us </h3>
                            <div className="contact-item">
                                <Image
                                    src="/images/mail.svg"
                                    alt="dasasdfsdf"
                                    className="pull-left"
                                    width={55}
                                    height={55}
                                />
                                <span>admin@qfsassetxledgers.com </span>
                            </div>
                            {/*<div class="contact-item">*/}
                            {/*    <Image src="template/images/location.svg" alt="dasasdfsdf" class="pull-left" width="55">*/}
                            {/*    <span>Skattepunkten AB Fiskebäcks hamn 27 SE-416 58 Västra Frölunda Sweden </span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/* column end */}
                </div>
                {/* row-end */}
            </div>
            {/* conatainer-end */}
        </section>
        {/*=================== contact-section-end=============== */}
        <footer className="footer t-burger dark-template-bg">
            <div className="container">
                {/* container-start */}
                {/* column end */}
                <div className="row footer-links">
                    <div
                        className="col-sm-3 col-lg-3 wow fadeInUp"
                        data-wow-delay=".4s"
                        data-wow-duration=".4s"
                    >
                        <a href="#" className="">
                            <span
                                style={{ fontWeight: 800, fontSize: "15pt", color: "#6E7FF3" }}
                            >
                                qfsassetxledgers
                            </span>{" "}
                            <span style={{ fontWeight: 800, color: "white", fontSize: "15pt" }}>
                                Limited
                            </span>
                        </a>
                        <p>
                            We are consistently rated the best and most secure cryptocurrency
                            exchanges in the world. We provide world class financial stability
                            by maintaining full reserves, healthy banking relationships and the
                            highest standards of legal compliance.{" "}
                        </p>
                    </div>
                    <div
                        className="col-sm-2 links wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration=".5s"
                    >
                        <h3>Learn more</h3>
                        <ul className="list-unstyled mt2">
                            <li>
                                <a href="#about" style={{ color: "#fff" }}>
                                    About qfsassetxledgers
                                </a>
                            </li>
                            <li>
                                <a href="#buy-token" style={{ color: "#fff" }}>
                                    Live price
                                </a>
                            </li>
                            <li>
                                <a href="#service" style={{ color: "#fff" }}>
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-sm-2 links wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration=".5s"
                    >
                        <h3>Information</h3>
                        <ul className="list-unstyled mt2">
                            {/* <li><a href="#faq-section" style="color: #fff;">Faq</a></li> */}
                            <li>
                                <a href="#contact" style={{ color: "#fff" }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div class="col-sm-2 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".7s">
            <h3>Certificate</h3>
            <a href=".pdf" width="120px" style="color: #fff;">
                <i class="fa fa-certificate" aria-hidden="true"></i>Certificate Of Incorporation</a>
        </div> */}
                </div>
                {/* row-end */}
            </div>
            {/* container-end */}
        </footer>
        {/* footer-end */}
        {/*  */}
        {/* JQUERY LIBRARY */}
        {/*  */}
        {/* Bootstrap JS */}
        {/*  */}
        {/* Main JS */}
        {/*  */}
        {/*  */}
    </>


}