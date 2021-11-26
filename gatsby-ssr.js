const React = require("react");
const config = require("./gatsby-config");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  const { dripAccountId, quoraId } = config.siteMetadata;

  if (process.env.NODE_ENV === `production`) {
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-drip`}
        dangerouslySetInnerHTML={{
          __html: `
            var _dcq = _dcq || [];
            var _dcs = _dcs || {};
            _dcs.account = '${dripAccountId}';
            (function() {
              var dc = document.createElement('script');
              dc.type = 'text/javascript'; dc.async = true;
              dc.src = "//tag.getdrip.com/${dripAccountId}.js";
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(dc, s);
            })();
          `,
        }}
      />,
      <script
        key={`gatsby-plugin-quora`}
        dangerouslySetInnerHTML={{
          __html: `
            !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '${quoraId}');
            qp('track', 'ViewContent');
          `,
        }}
      />,
    ]);
  }
};
