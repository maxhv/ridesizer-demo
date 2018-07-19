// === GENERATE GROWTH REPORT BLOCK ===

const generateGrowthBlock = (data) => {

    let roundMonthes;
    let count = 0;

    // = loop all estimation options =
    const getEstimatedBlocks = () => data.user.date.estimatedData.map((estimated) => {

        // = show first time round month to half year =
        if (count === 0) {
          roundMonthes = estimated.currentAgeBike.growthMonths % 12 > 5 ? 0 : 5;
        }

        count++;

        const fullAge = estimated.currentAgeBike.fullAge;

        roundMonthes = roundMonthes + 5;

        const fullCurrentAge = fullAge + '.' + roundMonthes % 10;

        const yearCount = estimated.currentAgeBike.yearCount;
        const estimatedImgSRC = estimated.currentAgeBike.global + data.bike.color + "/5.jpg";
        const unit = estimated.currentAgeBike.heightUnit;
        const willLastAge = estimated.currentAgeBike.lastAge;

        const willLastMsg = ` <td class="left-mobile" class="long-text links-color" width="100%" valign="top" style="font-weight: bold; color: #44b9c2; font-size: 24px; font-family: Arial, Helvetica, sans-serif; text-align: right; line-height: normal;">
                                  <p style="margin: 1em 0px; margin-bottom: 0px; margin-top: 0px;">${willLastAge} years</p>
                                </td>`
        const willLastMsgZero = `<td class="left-mobile" class="long-text links-color" width="100%" valign="top" style="font-weight: bold; color: #44b9c2; font-size: 18px; font-family: Arial, Helvetica, sans-serif; text-align: right; line-height: normal;">
                                <p style="margin: 1em 0px; margin-bottom: 0px; margin-top: 0px;">now you are ready for the next bike</p>
                              </td>`                            

        return `<table class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#edf2f6" style="background-color: #edf2f6;"
        id="ko_doubleArticleBlock_14">
        <tbody>
            <tr>
            <td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0;">
                <!--[if (gte mso 9)|(lte ie 8)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]-->
                <div style="margin: 0 auto; max-width: 570px; -mru-width: 0px;">
                <table border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" class="vb-row" style="border-collapse: separate; width: 100%; background-color: #ffffff; mso-cellspacing: 9px; border-spacing: 9px; max-width: 570px; -mru-width: 0px;">

                    <tbody>
                    <tr>
                        <td align="center" valign="top" style="font-size: 0;">
                        <div style="width: 100%; max-width: 552px; -mru-width: 0px;">
                            <!--[if (gte mso 9)|(lte ie 8)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><![endif]-->
                            <!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><![endif]-->
                            <div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%);">
                            <table class="vb-content" border="0" cellspacing="9" cellpadding="0" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; border-top: 1px solid #eee;"
                                width="276">

                                <tbody>

                                <tr>
                                    <td class="left-mobile"  width="100%" valign="top" align="left" style="padding: 10px 0 0; font-weight: bold; color: #6f7e95; font-size: 16px; font-family: Arial, Helvetica, sans-serif; text-align: left;">
                                      <span style="font-weight: bold;">AGE</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="long-text links-color numbers-smaller-mobile" width="100%" valign="top" align="left" style="font-weight: bold; color: #15a5fe; font-size: 46px; font-family: Arial, Helvetica, sans-serif; text-align: left; line-height: normal;">
                                    <p style="margin: 1em 0px; margin-bottom: 0px; margin-top: 0px;">${fullCurrentAge}</p>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                            </div>
                            <!--[if (gte mso 9)|(lte ie 8)]></td><![endif]-->
                            <!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><![endif]-->
                            <div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%);">
                            <table class="vb-content" border="0" cellspacing="9" cellpadding="0" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; border-top: 1px solid #eee;"
                                width="276">

                                <tbody>

                                <tr>
                                    <td class="left-mobile" width="100%" valign="top" align="left" style="padding: 10px 0 0; font-weight: bold; color: #6f7e95; font-size: 16px; font-family: Arial, Helvetica, sans-serif; text-align: right;">
                                    <span style="font-weight: bold;" >YEAR</span>
                                    </td>
                                </tr>
                                <tr>
                                  <td class="left-mobile" class="long-text links-color numbers-smaller-mobile" width="100%" valign="top" style="font-weight: bold; color: #15a5fe; font-size: 46px; font-family: Arial, Helvetica, sans-serif; text-align: right; line-height: normal;">
                                    <p style="margin: 1em 0px; margin-bottom: 0px; margin-top: 0px;">${yearCount}</p>
                                  </td>
                                </tr>


                                </tbody>
                            </table>
                            <!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]-->
                        </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
                </div>
                <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
            </td>
            </tr>              
        </tbody>  
        </table>

        <table class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#edf2f6" style="background-color: #edf2f6;"
        id="ko_imageBlock_12">
        <tbody>
            <tr>
            <td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0;">
                <!--[if (gte mso 9)|(lte ie 8)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]-->
                <div style="margin: 0 auto; max-width: 570px; -mru-width: 0px;">
                <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="570" class="vb-container" style="border-collapse: separate; width: 100%; background-color: #ffffff; mso-cellspacing: 0px; border-spacing: 0px; max-width: 570px; -mru-width: 0px;">

                    <tbody>
                    <tr>
                        <td width="100%" valign="top" align="center" class="links-color">
                        <!--[if (lte ie 8)]><div style="display: inline-block; width: 512px; -mru-width: 0px;"><![endif]-->
                        <img alt="" border="0" hspace="0" align="center" vspace="0" width="512" class="mobile-full" style="border: 0px; display: block; vertical-align: top; height: auto; margin: 0 auto; color: #6f7e95; font-size: 16px; font-family: Arial, Helvetica, sans-serif; width: 100%; max-width: 512px; height: auto;"
                            src=${estimatedImgSRC}>
                        <!--[if (lte ie 8)]></div><![endif]-->
                        </td>
                    </tr>

                    </tbody>
                </table>
                </div>
                <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->

            </td>
            </tr>
        </tbody>
        </table>
        <table class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#edf2f6" style="background-color: #edf2f6;"
        id="ko_doubleArticleBlock_14">
        <tbody>
            <tr>
            <td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0;">
                <!--[if (gte mso 9)|(lte ie 8)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]-->
                <div style="margin: 0 auto; max-width: 570px; -mru-width: 0px;">
                <table border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" class="vb-row" style="border-collapse: separate; width: 100%; background-color: #ffffff; mso-cellspacing: 9px; border-spacing: 9px; max-width: 570px; -mru-width: 0px;">

                    <tbody>
                    <tr>
                        <td align="center" valign="top" style="font-size: 0;">
                        <div style="width: 100%; max-width: 552px; -mru-width: 0px;">
                            <!--[if (gte mso 9)|(lte ie 8)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><![endif]-->
                            <!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><![endif]-->
                            <div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%);">
                            <table class="vb-content" border="0" cellspacing="9" cellpadding="0" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; border-top: 1px solid #44b9c2;"
                                width="276">

                                <tbody>

                                <tr>
                                    <td width="100%" valign="top" align="left" style="padding: 10px 0 0; font-weight: bold; color: #6f7e95; font-size: 14px; font-family: Arial, Helvetica, sans-serif; text-align: left;">
                                    <span style="font-weight: bold;">ESTIMATED HEIGHT</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="long-text links-color" width="100%" valign="top" align="left" style="font-weight: bold; color: #44b9c2; font-size: 24px; font-family: Arial, Helvetica, sans-serif; text-align: left; line-height: normal;">
                                    <p style="margin: 1em 0px; margin-bottom: 0px; margin-top: 0px;">${unit}</p>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                            </div>
                            <!--[if (gte mso 9)|(lte ie 8)]></td><![endif]-->
                            <!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><![endif]-->
                            <div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 276px; -mru-width: 0px; min-width: calc(50%); max-width: calc(100%); width: calc(304704px - 55200%);">
                            <table class="vb-content" border="0" cellspacing="9" cellpadding="0" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; border-top: 1px solid #44b9c2;"
                                width="276">

                                <tbody>

                                <tr>
                                    <td class="left-mobile" width="100%" valign="top" align="left" style="padding: 10px 0 0; font-weight: bold; color: #6f7e95; font-size: 14px; font-family: Arial, Helvetica, sans-serif; text-align: right;">
                                    <span style="font-weight: bold;" >BIKE WILL LAST</span>
                                    </td>
                                </tr>
                                <tr>
                                    ${willLastAge > 0 ? willLastMsg : willLastMsgZero}
                                </tr>


                                </tbody>
                            </table>
                            <!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]-->
                        </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
                </div>
                <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
            </td>
            </tr>              
        </tbody>  
        </table>` 
        }
    )   

    // = return estimated blocks if exists =
    if (data.user.date.estimatedData) {
      return getEstimatedBlocks();
    } else {
      return null;
    }

}

const createTemplate = (data) => {

  const blockWithEstimation = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

        ${head}

        <body bgcolor="#3f3f3f" text="#919191" alink="#cccccc" vlink="#cccccc" style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191;">
        <center>

            ${header}

            ${generateTitle(data, null, 'RECOMMENDED BIKE TODAY')}
            ${generateShopBikeBlock(data, 'reccomended')}

            ${generateTitle(null, 'Growth report', '')}
            ${estimationDescriptionBlock}

            // = split blocks =
            ${generateGrowthBlock(data) ? generateGrowthBlock(data).join('') : ''}

            ${generateTitle(data, null, 'RECOMMENDED BIKE TODAY')}
            ${generateShopBikeBlock(data, null)}

            ${shareBlock}

          </center>
        </body>
    </html>`

    return blockWithEstimation;
}

module.exports.getEmail = () => createTemplate