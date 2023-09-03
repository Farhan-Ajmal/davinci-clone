const DetailedPersonalData = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-[#1D2026] text-xl font-bold pt-6">
        Detailed information on the processing of Personal Data
      </h2>
      <div className="text-[1D2026] text-lg">
        <ul class="list-disc pl-11 space-y-6">
          <div>
            <li>Analytics</li>
            <p>
              The services contained in this section enable the Owner to monitor
              and analyze web traffic and can be used to keep track of User
              behavior.
            </p>
            <p>Appsflyer (AppsFlyer Ltd)</p>
            <p>Appsflyer is an analytics service provided by AppsFlyer Ltd.</p>
            <p>Personal Data processed: Tracker; Usage Data.</p>
            <p>
              Place of processing: Israel –&nbsp;
              <a
                className="text-[#90B4F5]"
                href="https://www.appsflyer.com/legal/privacy-policy/?utm_source=google"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
              – Opt Out.
            </p>
          </div>
          <div>
            <li>Device permissions for Personal Data access</li>
            <p>
              This Application requests certain permissions from Users that
              allow it to access the User's device Data as described below.
            </p>
            <p>
              Device permissions for Personal Data access (this Application)
            </p>
            <p>Appsflyer is an analytics service provided by AppsFlyer Ltd.</p>
            <p>
              This Application requests certain permissions from Users that
              allow it to access the User's device Data as summarized here and
              described within this document.
            </p>
            <p>
              Personal Data processed: Apple's speech recognition servers
              permission.
            </p>
          </div>
          <div>
            <li>Handling activity data </li>
            <p>
            This type of service allows the Owner to use the activity data collected by your device in order for this Application to operate or to provide specific features. This may include movements, heartbeat, change in altitude or data about the surroundings.
            </p>
            <p>Depending on what is described below, third parties may be involved in the activity tracking.</p>
            <p>Most devices allow for the User to control which Data is accessed or stored.</p>
            <p>Apple HealthKit (Apple Inc.)</p>
            <p>HealthKit is an activity data handling service provided by Apple Inc. that enables the Owner to access or store activity data.</p>
            <p>Personal Data processed: movement activity.</p>
            <p>
            Place of processing: United States –&nbsp;
              <a
                className="text-[#90B4F5]"
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
            </p>
          </div>
          <div>
            <li>Registration and authentication </li>
            <p>
            By registering or authenticating, Users allow this Application to identify them and give them access to dedicated services.
            </p>
            <p>Depending on what is described below, third parties may provide registration and authentication services. In this case, this Application will be able to access some Data, stored by these third-party services, for registration or identification purposes.</p>
            <p>Some of the services listed below may also collect Personal Data for targeting and profiling purposes; to find out more, please refer to the description of each service.</p>
            <p>Facebook Oauth (Meta Platforms, Inc.)</p>
            <p>Facebook Oauth is a registration and authentication service provided by Meta Platforms, Inc. and is connected to the Facebook social network.</p>
            <p>Personal Data processed: Trackers; various types of Data.</p>
            <p>
            Place of processing: United States –&nbsp;
              <a
                className="text-[#90B4F5]"
                href="https://www.facebook.com/policy.php"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
            </p>
            <p>Google OAuth (Google LLC)</p>
            <p>Google OAuth is a registration and authentication service provided by Google LLC and is connected to the Google network.</p>
            <p>Personal Data processed: various types of Data as specified in the privacy policy of the service.</p>
            <p>
            Place of processing: United States – &nbsp;
              <a
                className="text-[#90B4F5]"
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
            </p>
            <p>Sign in with Apple (Apple Inc.)</p>
            <p>Sign in with Apple is a registration and authentication service provided by Apple Inc. In cases where Users are required to provide their email address, Sign in with Apple may generate a private relay address on behalf of Users that automatically forwards messages to their verified personal email account - therefore shielding their actual email address from the Owner.</p>
            <p>Personal Data processed: country; date of birth; email address; first name; last name; password; User ID.</p>
            <p>
            Place of processing: United States – &nbsp;
              <a
                className="text-[#90B4F5]"
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DetailedPersonalData;
