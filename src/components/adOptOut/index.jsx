const AdOptOut = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-[#1D2026] text-xl font-bold pt-6">
        Information on opting out of interest-based advertising
      </h2>
      <div className="text-[1D2026] text-lg">
        <span>
          In addition to any opt-out feature provided by any of the services
          listed in this document, Users may follow the instructions provided by
          YourOnlineChoices (EU), the{" "}
        </span>
        &nbsp;
        <a
          className="text-[#90B4F5]"
          href="https://thenai.org/about-online-advertising/"
          target="_blank"
        >
          Network Advertising Initiative
        </a>
        &nbsp;
        <span>(US) and the </span>
        <a
          className="text-[#90B4F5]"
          href="https://youradchoices.com/control"
          target="_blank"
        >
          Digital Advertising Alliance
        </a>
        &nbsp;
        <span> (US), </span>
        <a
          className="text-[#90B4F5]"
          href="https://youradchoices.ca/en/learn"
          target="_blank"
        >
          DAAC
        </a>
        &nbsp;
        <span>(Canada),</span>&nbsp;
        <a
          className="text-[#90B4F5]"
          href="https://youradchoices.ca/en/learn"
          target="_blank"
        >
          DDAI
        </a>
        &nbsp;
        <span>
          (Japan) or other similar initiatives. Such initiatives allow Users to
          select their tracking preferences for most of the advertising tools.
          The Owner thus recommends that Users make use of these resources in
          addition to the information provided in this document.
        </span>
        &nbsp;
      </div>
      <div className="text-[1D2026] text-lg">
        <span>
          The Digital Advertising Alliance offers an application called{" "}
        </span>
        &nbsp;
        <a
          className="text-[#90B4F5]"
          href="https://youradchoices.com/appchoices"
          target="_blank"
        >
          AppChoices
        </a>
        &nbsp;
        <span>
          that helps Users to control interest-based advertising on mobile apps.
        </span>
      </div>
      <div className="text-[1D2026] text-lg">
        <span>
          Users may also opt-out of certain advertising features through
          applicable device settings, such as the device advertising settings
          for mobile phones or ads settings in general.
        </span>
      </div>
    </div>
  );
};

export default AdOptOut;
