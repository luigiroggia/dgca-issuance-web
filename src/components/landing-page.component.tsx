/*
 * eu-digital-green-certificates/ dgca-issuance-web
 *
 * (C) 2021, T-Systems International GmbH
 *
 * Deutsche Telekom AG and all other contributors /
 * copyright owners license this file to you under the Apache
 * License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Button, Container, Fade } from 'react-bootstrap'

import '../i18n';
import { useTranslation } from 'react-i18next';

import useNavigation from '../misc/navigation';
import React from 'react';
import Spinner from './spinner/spinner.component';

const LandingPage = (props: any) => {

    const navigation = useNavigation();
    const { t } = useTranslation();
    const [isInit, setIsInit] = React.useState(false)

    React.useEffect(() => {
        if (navigation)
            setIsInit(true);
    }, [navigation])

    return (!isInit ? <Spinner /> :
        <Fade appear={true} in={true} >
            <Container className='center-content'>
                <span className='landing-title mx-auto mb-4'>{t('translation:welcome')}</span>

                <Button block className='landing-btn my-2' onClick={context.navigation!.toRecordVac}>{t('translation:record-vaccination-cert-dat')}</Button>
                <Button block className='landing-btn my-2' onClick={context.navigation!.toRecordTest}>{t('translation:record-test-cert-dat')}</Button>
                <Button block className='landing-btn my-2' onClick={context.navigation!.toRecordRecovery}>{t('translation:record-recovery-cert-dat')}</Button>

<<<<<<< HEAD
            </Container>
        </Fade>
=======
            <Button block className='landing-btn my-2' onClick={navigation!.toRecordVac}>{t('translation:record-vaccination-cert-dat')}</Button>
            <Button block className='landing-btn my-2' onClick={navigation!.toRecordTest}>{t('translation:record-test-cert-dat')}</Button>
            <Button block className='landing-btn my-2' onClick={navigation!.toRecordRecovery}>{t('translation:record-recovery-cert-dat')}</Button>

        </Container>
>>>>>>> parent of c8fe6bf (Feat/valueset from service (#102))
    )
}

export default LandingPage;